---
title: Smart Contract Reader for Ethereum blockchain 
author: adrian
date: 2023-8-11
categories: [Web Development, Smart Contract Reader]
tags: [🔥React, 🔥Solidity]
pin: true
math: true
mermaid: false
# image:
#   path: /
#   width: 800
#   height: 500
#   alt: 
---

`App demo`
<a href='https://erc.adriannyc.dev' target="_blank" rel="noopener noreferrer" class='large-link' ><br>https://erc.adriannyc.dev</a>

<br>`ERC20 Faucet React Project with Thirdweb Framework`

This repository contains the source code for a project written with React and Thirdweb framework. 

The project is hosted on GitHub Pages under my private domain.

<a href='https://github.com/adrianmnh/erc20-faucet' class='large-link'>Link to Project source code</a>


<br> `Overview`

The project is built with React, a popular JavaScript library for building user interfaces. 

It utilizes the Thirdweb framework to interact with smart contracts, enabling seamless integration with blockchain functionalities.

<br> `Requirements`

To interact with this project, you'll need to have a MetaMask wallet installed on your browser. 

MetaMask is a popular Ethereum wallet extension that allows you to manage your Ethereum accounts and interact with blockchain applications.

<br> **`Important Notes`**

This project's ERC20 contract lives on the `Ethereum Testnet blockchain Mumbai`. 

While the contract is considered safe for use, I recommend being cautious and not interacting with other contracts until all potential bugs are corrected.

<br> `Features`

* Uses hooks and custom CSS to render a modern and user-friendly UI.

* Uses hooks and custom CSS to render a modern and user-friendly UI.
* Utilizes Thirdweb framework to interact with smart contracts on the Ethereum Test blockchain.
* Custom-written ERC20 contract implementation for token functionality.
* Enable interaction with my ERC-20 implementation, though other token contracts may also be used.
* Developed with React, leveraging React hooks and custom CSS for user-friendly UI rendering.

<br> `Installation and Deployment`

To use this repository, follow the steps below:

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/adrianmnh/erc20-faucet/tree/mainBranch
cd erc20-faucet
```
Install the required dependencies:

```bash
npm install
```

Run the project locally:
```bash
npm run start
```
    
For production deployment:

```bash
npm run build
npm run deploy -- -m "Custom commit message for gh-pages repo"
```


**`Notes:`** The gh-pages module has an index.js file that contains a list of exports. In this file, you'll find branch and remote keys. Make sure to configure the remote value to match the name of the remote repository where your source code resides (e.g., "origin" or a custom name).

Thank you for checking out this project! If you have any questions or issues, feel free to reach out.


