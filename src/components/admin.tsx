import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { program } from "../anchor/setup";
import { BN } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

export default function Admin() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setMaxAmount] = useState(0);
  const [owner, setOwnerAddress] = useState('');

  const handleDepositAmount = (e: any) => {
    setMaxAmount(Number(e.target.value));
  }
  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);

    try {
      // Create a transaction to invoke the increment function 
      const [globalState] = await PublicKey.findProgramAddress(
        [
          Buffer.from("GLOBAL_STATE_SEED")
        ],
        program.programId
      );
      
      const transaction = await program.methods
        .setMaxAmount(new BN(amount * 10 ** 6)) // This takes no arguments so we don't need to pass anything
        .accounts({
          owner: publicKey,
          globalState
        })
        .transaction();

      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );

      console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handlePonzify = async () => {
    if (!publicKey) return;

    try {
      // Create a transaction to invoke the increment function 
      const [globalState] = await PublicKey.findProgramAddress(
        [
          Buffer.from("GLOBAL_STATE_SEED")
        ],
        program.programId
      );
      const globalStateData = await program.account.globalState.fetch(globalState);
      const currentPonzify = globalStateData.ponzify;

      const transaction = await program.methods
        .setPonzify(!currentPonzify) // This takes no arguments so we don't need to pass anything
        .accounts({
          owner: publicKey,
          globalState
        })
        .transaction();

      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );

      console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`);

    } catch (error) {
      console.log(error);
    } 
  };
  const handleTransferOwnerShip = async () => {
    if (!publicKey) return;

    try {
      // Create a transaction to invoke the increment function 
      const [globalState] = await PublicKey.findProgramAddress(
        [
          Buffer.from("GLOBAL_STATE_SEED")
        ],
        program.programId
      );
      const newOwner = new PublicKey(owner);


      const transaction = await program.methods
        .transferOwnership(newOwner) // This takes no arguments so we don't need to pass anything
        .accounts({
          owner: publicKey,
          globalState
        })
        .transaction();

      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );

      console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`);

    } catch (error) {
      console.log(error);
    } 
  };
  

  return (
    <div>
      <div style={{marginBottom:"10px"}}>
        <input type="number" min={0} onChange={(e) => handleDepositAmount(e)}/>
        <button
          className="w-24"
          onClick={onClick}
          disabled={!publicKey}
        >
          {isLoading ? "Loading" : "Set Max Amount"}
        </button>
        
      </div>

      <div style={{marginBottom:"10px"}}>
        <input type="text" onChange={(e) => setOwnerAddress(e.target.value)}/>
        <button
          className="w-24"
          onClick={handleTransferOwnerShip}
          disabled={!publicKey}
        >
          Transfer Ownership
        </button>
        
      </div>

      <div style={{marginBottom:"10px"}}>
          
        <button
          className="w-24"
          onClick={handlePonzify}
          disabled={!publicKey}
        >
          Toggle Ponzify
        </button>
      </div>
    </div>
    
  );
}
