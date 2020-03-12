import React from "react";

const About = () => {
  return (
        <div className="about">
            <h2>Cryptocurrency</h2>
            <h3>What Is a Cryptocurrency?</h3>
            <p>A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to 
                counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a 
                distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they 
                are generally not issued by any central authority, rendering them theoretically immune to government interference or 
                manipulation.</p>
            <h3>Understanding Cryptocurrencies</h3>
            <p>Cryptocurrencies are systems that allow for the secure payments online which are denominated in terms of virtual "tokens,"
                which are represented by ledger entries internal to the system. "Crypto" refers to the various encryption algorithms and
                cryptographic techniques that safeguard these entries, such as elliptical curve encryption, public-private key pairs,
                and hashing functions.</p>
            <h3>Types of Cryptocurrency</h3>
            <p>The first blockchain-based cryptocurrency was Bitcoin, which still remains the most popular and most valuable. Today, 
                there are thousands of alternate cryptocurrencies with various functions and specifications. Some of these are clones 
                or forks of Bitcoin, while others are new currencies that were built from scratch. Bitcoin was launched in 2009 by an 
                individual or group known by the pseudonym "Satoshi Nakamoto." As of Nov. 2019, there were over 18 million bitcoins in 
                circulation with a total market value of around $146 billion.
                Some of the competing cryptocurrencies spawned by Bitcoin’s success, known as "altcoins," include Litecoin, Peercoin, 
                and Namecoin, as well as Ethereum, Cardano, and EOS. Today, the aggregate value of all the cryptocurrencies in existence 
                is around $214 billion—Bitcoin currently represents more than 68% of the total value.</p>
            <h3>Special Considerations</h3>
            <p>Central to the appeal and functionality of Bitcoin and other cryptocurrencies is blockchain technology, which is used 
                to keep an online ledger of all the transactions that have ever been conducted, thus providing a data structure for 
                this ledger that is quite secure and is shared and agreed upon by the entire network of individual node, or computer 
                maintaining a copy of the ledger. Every new block generated must be verified by each node before being confirmed, 
                making it almost impossible to forge transaction histories. 
                Many experts see blockchain technology as having serious potential for uses like online voting and crowdfunding, 
                and major financial institutions such as JPMorgan Chase (JPM) see the potential to lower transaction costs by 
                streamlining payment processing. However, because cryptocurrencies are virtual and are not stored on a central 
                database, a digital cryptocurrency balance can be wiped out by the loss or destruction of a hard drive if a backup 
                copy of the private key does not exist. At the same time, there is no central authority, government, or corporation 
                that has access to your funds or your personal information.</p>
        </div>
  );
};

export default About;