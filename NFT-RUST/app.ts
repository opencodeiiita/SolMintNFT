import {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {
    Connection,
    Keypair,
    PublicKey,
    SystemProgram,
    SYSVAR_RENT_PUBKEY,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
} from '@solana/web3.js';
import fs from 'mz/fs';
import os from 'os';
import path from 'path';
import yaml from 'yaml';
import {createKeypairFromFile} from './util';


// Path to local Solana CLI config file.
const CONFIG_FILE_PATH = path.resolve(
    os.homedir(),
    '.config',
    'solana',
    'cli',
    'config.yml',
);


export async function main() {
    const connection = new Connection("https://api.devnet.solana.com/", "confirmed");

    console.log(`Successfully connected to Solana dev net.`);

    const configYml = await fs.readFile(CONFIG_FILE_PATH, {encoding: 'utf8'});
    const keypairPath = await yaml.parse(configYml).keypair_path;
    const wallet = await createKeypairFromFile(keypairPath);
    console.log(`Local account loaded successfully.`);

    const programKeypair = await createKeypairFromFile(
        path.join(
            path.resolve(__dirname, './dist/program'), 
            'mint-keypair.json'
    ));
    const programId = programKeypair.publicKey;

    const mintKeyPair = Keypair.generate();
    const tokenAddress = await getAssociatedTokenAddress(
        mintKeyPair.publicKey,
        wallet.publicKey
      );

      // Transact with our program

      const instruction = new TransactionInstruction({
        keys: [
            // Mint account : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                // Add changes here !
            },
            // Token account : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                pubkey: tokenAddress,
                isSigner: false,
                isWritable: true,
            },
            // Mint Authority : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                pubkey: wallet.publicKey,
                isSigner: true,
                isWritable: false,
            },
            // Rent account : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                // Add changes here !
            },
            // System program : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                pubkey: SystemProgram.programId,
                isSigner: false,
                isWritable: false,
            },
            // Token program : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                // Add changes here !
            },
            // Associated token program : all these are for variables (accounts) that are same as present in lib.rs at the starting of process_instruction fn
            {
                // Add changes here !
            },
        ],
        programId: programId,
        data: Buffer.alloc(0),
    })
    // Further code !
}

main().then(
    () => process.exit(),
    err => {
      console.error(err);
      process.exit(-1);
    },
  );
