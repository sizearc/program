import { useEffect, useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { program, globalState, GlobalStateData } from "../anchor/setup";

export default function DepositState() {
  const { connection } = useConnection();
  const [globalStateData, setGlobalStateData] = useState<GlobalStateData | null>(null);

  useEffect(() => {
    // Fetch initial account data
    program.account.globalState.fetch(globalState).then((data) => {
      setGlobalStateData(data);
    });

    // Subscribe to account change
    const subscriptionId = connection.onAccountChange(
      globalState,
      (accountInfo) => {
        setGlobalStateData(
          program.coder.accounts.decode("globalState", accountInfo.data)
        );
      }
    );

    return () => {
      // Unsubscribe from account change
      connection.removeAccountChangeListener(subscriptionId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [program]);

  return(
    <div>
      <p className="text-lg">Token Mint: {globalStateData?.doubleToken?.toString()}</p>
      <p className="text-lg">Token Max Amount: {(globalStateData?.maxAmount/ 10 ** 6).toString()}</p>
      <p className="text-lg">Current Ponzify: {(globalStateData?.ponzify ? 'Ture': 'False')}</p>
      <p className="text-lg">Current Owner: {globalStateData?.owner?.toString()}</p>

    </div>
  ) 
}
