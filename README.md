
# SolMintNFT 

<h1 align="center">
    <img src="https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg" height="200" width="200" alt="sol-sym">
</h1>

SolMintNFT is a project under OpenCode'22, that will be building an NFT marketplace using the Solana blockchain. Here, we will mint collection of generative NFTs using tools like, Metaplex and Hashlips-art-engine, and NFTs using Rust.

## Tech Stacks
* Solana
* Rust
* Metaplex - Sugar Candy Machine CLI-V2
* Hashlips engine
* Arweave

## Setup on local machine

### Setting up the environment-
* Install the latest [Rust](https://rustup.rs) stable.
* Install the latest [Solana-CLI](https://docs.solana.com/cli/install-solana-cli-tools)

The normal cargo build is available for building programs against your host machine which can be used for unit testing:
```
$ cargo build
```
To build a specific program, such as SPL Token, for the Solana BPF target which can be deployed to the cluster:
```
$ cd <the program directory>
$ cargo build-bpf
```

## Claiming an issue 
* If you want to claim any issue (task), just reply with any message on that issue thread which justifies that you want to work on this issue. Ex :- Claim, I want to work on this issue, etc. 
* Issues will be given out on first come first serve basis. 
* In case of no activity on an issue even after 2 days, the issue will be reassigned. If you have difficulty approaching an issue, feel free to ask on our [Discord](https://discord.gg/EhkMEZpbuU) channel.

## Guidelines 
* Fork the repository to your github account.
* Clone it to your local setup by using `git clone <repo link>`
* Navigate to the respective folder in which the code need to be updated or added.
* Do the necessary changes according to the issue assigned.
* All set! Once you are confident in your work, push your code and create a pull request (PR) to the main branch of the upstream repository with proper descriptions/comments in the code explaining what you did and wait until we review it.
* Single commit per pull request and name the commit as something meaningful.
* Reference the issue numbers in the commit message if it resolves an open issue.
* Strictly follow the template provided inside .github directory to make a PR.
* Make changes to the pull request if the reviewing maintainer recommends them.
* Do not use unnecessary variables or functions and follow a easy and understandable code structure with proper comments.
* Pull Requests older than 2 days with no response from the contributor shall be marked closed.
* Do not make PR which is not related to any issues.
* Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.
* Be polite and gentle to other community members.

## Communication
If you have any doubt or suggestions regarding the project or it's any issue, feel free to ping us anytime in the SolMintNFT channel of our [Discord](https://discord.gg/EhkMEZpbuU) server.

## Resources
* Solana doc: https://docs.solana.com/developers
* Rust doc: https://doc.rust-lang.org/book/title-page.html
* Metaplex doc: https://docs.metaplex.com/
