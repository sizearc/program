import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, DoubleSystem } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const programId = new PublicKey("H6uw19XtyqqFbJMjziEe9gjHW5zcK65hbSc9xUSRmwZ"); 

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<DoubleSystem>(IDL, programId, {
  connection,
});

// Derive a PDA for the counter account, using "counter" as the seed.
// We'll use this to update the counter on-chain.
export const [globalState] = PublicKey.findProgramAddressSync(
  [Buffer.from("GLOBAL_STATE_SEED")],
  program.programId
);

// Define a TypeScript type for the Counter data structure based on the IDL.
// This ensures type safety when interacting with the "counter" account, facilitating development and maintenance.
export type GlobalStateData = IdlAccounts<DoubleSystem>["globalState"];
