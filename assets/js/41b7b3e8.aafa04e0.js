(self.webpackChunk=self.webpackChunk||[]).push([[3513],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(74165),i=a(15861),o=a(67294),s=a(33444),r=a(5270),l=a(67425);function d(e,t,a){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,n.Z)().mark((function e(t,a,i){var o,l,d,h,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(o),e.next=21,r.G.create({provider:d});case 21:h=e.sent,(c=a.split(".")).forEach((function(e){e in h&&(h=h[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=h.toString(),e.abrupt("break",35);case 29:return e.next=31,h();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,a=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,h=(0,o.useState)(""),p=h[0],m=h[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?c(s.toString(),l,t,m):m(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,a,m);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(i,l,t,m):m(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),p}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var i=void 0;if("polkadot"===a||"statemint"===a)i=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(i)+" "+t[a].symbol).toString())},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},84358:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),s=a(47940),r=["components"],l={id:"learn-staking-advanced",title:"Advanced Staking Concepts",sidebar_label:"Advanced Staking Concepts",description:"Advanced staking information",keywords:["staking","stake","nominate","nominating","NPoS","proxies"],slug:"../learn-staking-advanced"},d=void 0,h={unversionedId:"learn/learn-staking-advanced",id:"learn/learn-staking-advanced",title:"Advanced Staking Concepts",description:"Advanced staking information",source:"@site/../docs/learn/learn-staking-advanced.md",sourceDirName:"learn",slug:"/learn-staking-advanced",permalink:"/docs/learn-staking-advanced",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-staking-advanced.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1664459795,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{id:"learn-staking-advanced",title:"Advanced Staking Concepts",sidebar_label:"Advanced Staking Concepts",description:"Advanced staking information",keywords:["staking","stake","nominate","nominating","NPoS","proxies"],slug:"../learn-staking-advanced"},sidebar:"docs",previous:{title:"SPREE",permalink:"/docs/learn-spree"},next:{title:"Staking Miner",permalink:"/docs/learn-staking-miner"}},c={},p=[{value:"Pallets and Extrinsics",id:"pallets-and-extrinsics",level:2},{value:"Staking Proxies",id:"staking-proxies",level:2},{value:"Bags List",id:"bags-list",level:2},{value:"Rewards Distribution",id:"rewards-distribution",level:2},{value:"Oversubscription, Commission Fees &amp; Slashes",id:"oversubscription-commission-fees--slashes",level:4},{value:"Slashing",id:"slashing",level:2},{value:"Unresponsiveness",id:"unresponsiveness",level:3},{value:"Equivocation",id:"equivocation",level:3},{value:"Slashing Across Eras",id:"slashing-across-eras",level:3},{value:"Inflation",id:"inflation",level:2}],m={toc:p};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page is meant to be an advanced guide to staking with\nPolkadot."),(0,o.kt)("h2",{id:"pallets-and-extrinsics"},"Pallets and Extrinsics"),(0,o.kt)("p",null,"Polkadot is built using\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"substrate"),", a modular system to efficiently build blockchains. Within each\nmodule or ",(0,o.kt)("strong",{parentName:"p"},"pallet"),", one can ",(0,o.kt)("strong",{parentName:"p"},"call")," different functions that have similar logic. You can explore\nsubstrate pallets on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"this dedicated page"),". For\nexample, the staking pallet contains all functionalities related to staking such as bonding or\nunbonding funds. The combined information of pallets and calls constitutes an ",(0,o.kt)("strong",{parentName:"p"},"extrinsic"),", i.e. a\ntransaction that is executed from outside the chain but that triggers an event on the chain.\nContinuing with the staking example, within the staking pallet a nominator can bond funds and\nnominate some validators. The signature of such extrinsic might lead to an event on the chain such\nas a reward payout to that nominator at the end of an era; this is an event inside the chain."),(0,o.kt)("h2",{id:"staking-proxies"},"Staking Proxies"),(0,o.kt)("p",null,"Polkadot makes it possible to create accounts\nhaving special permissions also called ",(0,o.kt)("strong",{parentName:"p"},"proxy accounts"),". For mode details about proxy accounts\nvisit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},"dedicated page")," on this wiki."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"staking",src:a(13758).Z,width:"2274",height:"828"})),(0,o.kt)("p",null,"Proxy accounts are special accounts which can sign ",(0,o.kt)("a",{parentName:"p",href:"#pallets-and-extrinsics"},(0,o.kt)("strong",{parentName:"a"},"extrinsic calls")),"\nmade to specific ",(0,o.kt)("a",{parentName:"p",href:"#pallets-and-extrinsics"},(0,o.kt)("strong",{parentName:"a"},"pallets"))," on behalf of the proxied account. There is\nthus the possibility to create staking proxy accounts that can be used to sign only extrinsic calls\nto staking, session and utility pallets. This makes the stash account even more isolated than using\na controller account since one can bond / unbond / bond more funds using the staking proxy account."),(0,o.kt)("p",null,"Note that it is not necessary to have a controller, if you have a staking proxy: the stash can also\nbe the controller. It is important to remember that actions that can be performed by the proxy\naccounts are limited, and in the case of staking proxy, extrinsic calls to the balances pallet\ncannot be signed. This means it is not possible to do balance transfers on the proxied account\nthrough a staking proxy."),(0,o.kt)("h2",{id:"bags-list"},"Bags List"),(0,o.kt)("p",null,"The nomination intents are placed in a so-called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/9507"},"bags-list"),".\nThe bags list\nhas two primary components, bags and nodes. The list is composed of bags that each describe a range\nof active bonded funds (e.g. the 1st bag will have nominators who staked 0 \u2192 10 DOT, 2nd bag 11 \u2192 20\nDOT, etc). Each bag contains nodes that correspond to nominators and their staked funds."),(0,o.kt)("p",null,"The bags-list pallet is designed to be self-maintaining, with minimal effort from the blockchain,\nmaking it extremely scalable. Let us explore the sorting functionality of the bags list with an\nexample. In the bags list below, there are 8 nodes (corresponding to 8 accounts with staked funds)\nplaced in 3 bags. It can be observed that the list of nodes within the bags is arranged based on\ntheir insertion order and not based on the number of tokens bonded. For instance, the nodes in bag 1\nare arranged in this order: 15 \u2192 12 \u2192 19."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bags list example 1",src:a(43947).Z,width:"1994",height:"578"})),(0,o.kt)("p",null,"Let's say the nominator with the stake of 19 DOT bonds 2 DOT additionally. This action would place\nthat nominator node in bag 2, right after the node with 27 DOT."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bags list example 2",src:a(86078).Z,width:"1994",height:"578"})),(0,o.kt)("p",null,"Once the nomination period ends, the NPoS election mechanism takes the nomination intents and their\nassociated votes as input, and it outputs a set of validators. The bags are iterated from the most\nstaked to the least staked. This could leave the last touched bag to only be partially iterated.\nThis means that in some edge cases, the order of members within a bag is also important. Recall that\nwithin each bag, the iteration order is simply the insertion order. If only 7 nodes must be picked\nfor the electing set, the nodes with 5 and 7 DOT will be selected while the node with 8 DOT will be\nleft out."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bags list example 3",src:a(32478).Z,width:"1994",height:"578"})),(0,o.kt)("p",null,"If one receives staking rewards and the amount of staked tokens within the stash account increases\nover time, the position within a bag changes and may also result in a change of bag. This may also\nhappen if accounts within the bag bond more tokens or unbond tokens, one's account position and the\nposition of other accounts in the bags list might change. These changes are not done automatically,\nrequiring the nominator to submit the permissionless extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"rebag")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"voterList")," pallet\nto update their position. This allows anyone to specify another account that is in the wrong bag,\nand place it in the correct one. The ",(0,o.kt)("inlineCode",{parentName:"p"},"voterList")," pallet also comes with the extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"putInFrontOf"),"\nwhich helps the node to move up in the bag. Actions like bonding/unbonding tokens automatically\nrebags the nominator node, but events like staking rewards/slashing do not. See the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nominator#bags-list"},"bags-list")," section for more information."),(0,o.kt)("p",null,"This sorting functionality using bags is extremely important for the\n",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"long-term improvements")," of the\nstaking/election system. The bags-list is capable of including an unlimited number of nodes, subject\nto the chain's runtime storage. In the current staking system configuration, the bags list keeps\n",(0,o.kt)(s.Z,{network:"polkadot",path:"query.staking.maxNominatorsCount",defaultValue:5e4,mdxType:"RPC"}),"\n","\nnomination intents, of which, at most\n",(0,o.kt)(s.Z,{network:"polkadot",path:"query.electionProviderMultiPhase.maxElectingVoters",defaultValue:22500,mdxType:"RPC"}),"","\ncome out as the electing nominators. See\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"Staking Election Stages")," section for more info."),(0,o.kt)("admonition",{title:"Minimum active nomination threshold to earn rewards is dynamic",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Once again, submitting a nomination intent does not guarantee staking rewards. The stake of the top\n",(0,o.kt)(s.Z,{network:"polkadot",path:"query.electionProviderMultiPhase.maxElectingVoters",defaultValue:22500,mdxType:"RPC"}),"","\nnominators is applied to the validators in the active set. To avail of staking rewards, ensure that\nthe number of tokens bonded is higher than the minimum active nomination. For more information, see\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominator guide"))),(0,o.kt)("p",null,'The "election solution" which is a connected graph between nominators and validators with the stake\nas edge weights, has to meet certain requirements, such as maximizing the amount of stake to\nnominate validators and distributing the stake backing validators as evenly as possible. The\nobjectives of this election mechanism are to maximize the security of the network, and achieve fair\nrepresentation of the nominators. If you want to know more about how NPoS works (e.g. election,\nrunning time complexity, etc.), please read\n',(0,o.kt)("a",{parentName:"p",href:"http://research.web3.foundation/en/latest/polkadot/NPoS.html"},"here"),"."),(0,o.kt)("h2",{id:"rewards-distribution"},"Rewards Distribution"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The general rule for rewards across validators is that two validators get paid essentially the same\namount of tokens for equal work, i.e. they are not paid proportional to their total stakes. There is\na probabilistic component to staking rewards in the form of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-guides-validator-payout##era-points"},"era points")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-transaction-fees#fee-calculation"},"tips")," but these should average out over time.")),(0,o.kt)("p",null,"Validators are paid the same regardless of stake backing them. Validators with less stake will\ngenerally pay more to nominators per-token than the ones with more stake. This gives nominators an\neconomic incentive to gradually shift their preferences to lower-staked validators that gain a\nsufficient amount of reputation. A consequence of this is that the stake across validators will be\nas evenly distributed as possible which avoids concentration of power among a few validators. In the\nlong term, validators will have similar levels of stake, with the stake being higher for validators\nwith higher reputation. A nominator who is willing to risk more by backing a validator with a lower\nreputation will get paid more, provided there are no slashing events."),(0,o.kt)("p",null,"Before distributing rewards to nominators, validators can create a cut of the reward (a commission)\nthat is not shared with the nominators. This cut is a percentage of the block reward, not an\nabsolute value. After the commission gets deducted, the remaining portion is distributed pro-rata\nbased on their staked value and split between the validator and all of the nominators whose stake\nhas backed this validator."),(0,o.kt)("p",null,"For example, assume the block reward for a validator is 10 DOT. A validator may specify\n",(0,o.kt)("inlineCode",{parentName:"p"},"validator_commission = 50%"),", in which case the validator would receive 5 DOT. The remaining 5 DOT\nwould then be split between the validator and their nominators based on the proportion of stake each\nnominator had. Note that for this calculation, validator's self-stake acts just as if they were\nanother nominator."),(0,o.kt)("p",null,"Thus, a percentage of the reward goes thus to pay the validator's commission fees and the remainder\nis paid pro-rata (i.e. proportional to stake) to the nominators and validator. If a validator's\ncommission is set to 100%, no tokens will be paid out to any of the nominators. Notice in particular\nthat the validator is rewarded twice: once in commission fees for validating (if their commission\nrate is above 0%), and once for nominating itself with own stake."),(0,o.kt)("p",null,"The following example should clarify the above. For simplicity, we have the following assumptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These validators do not have a stake of their own."),(0,o.kt)("li",{parentName:"ul"},"They each receive the same number of era points."),(0,o.kt)("li",{parentName:"ul"},"There are no tips for any transactions processed."),(0,o.kt)("li",{parentName:"ul"},"They do NOT charge any commission fees."),(0,o.kt)("li",{parentName:"ul"},"Total reward amount is 100 DOT tokens."),(0,o.kt)("li",{parentName:"ul"},"The current minimum amount of DOT to be a validator is 350 (note that this is ",(0,o.kt)("em",{parentName:"li"},"not")," the actual\nvalue, which fluctuates, but merely an assumption for purposes of this example; to understand how\nthe actual minimal stake is calculated, see\n",(0,o.kt)("a",{parentName:"li",href:"/docs/faq#what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator"},"here"),").")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Validator A")),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Nominator (4)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Stake (600)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Fraction of the Total Stake"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Rewards")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Jin"),(0,o.kt)("td",{parentName:"tr",align:"center"},"100"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.167"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16.7")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Sam")),(0,o.kt)("td",{parentName:"tr",align:"center"},"50"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.083"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8.3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Anson"),(0,o.kt)("td",{parentName:"tr",align:"center"},"250"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.417"),(0,o.kt)("td",{parentName:"tr",align:"center"},"41.7")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Bobby"),(0,o.kt)("td",{parentName:"tr",align:"center"},"200"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.333"),(0,o.kt)("td",{parentName:"tr",align:"center"},"33.3")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Validator B")),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Nominator (4)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Stake (400)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Fraction of the Total Stake"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Rewards")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Alice"),(0,o.kt)("td",{parentName:"tr",align:"center"},"100"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.25"),(0,o.kt)("td",{parentName:"tr",align:"center"},"25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Peter"),(0,o.kt)("td",{parentName:"tr",align:"center"},"100"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.25"),(0,o.kt)("td",{parentName:"tr",align:"center"},"25")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"John"),(0,o.kt)("td",{parentName:"tr",align:"center"},"150"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.375"),(0,o.kt)("td",{parentName:"tr",align:"center"},"37.5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Kitty")),(0,o.kt)("td",{parentName:"tr",align:"center"},"50"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.125"),(0,o.kt)("td",{parentName:"tr",align:"center"},"12.5")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Both validators A & B have 4 nominators with a total stake 600 and 400 respectively.")),(0,o.kt)("p",null,"Based on the above rewards distribution, nominators of validator B get more rewards per DOT than\nthose of validator A because A has more overall stake. Sam has staked 50 DOT with validator A, but\nhe only gets 8.3 in return, whereas Kitty gets 12.5 with the same amount of stake."),(0,o.kt)("p",null,"To estimate how many tokens you can get each month as a nominator or validator, you can use this\n",(0,o.kt)("a",{parentName:"p",href:"https://www.stakingrewards.com/earn/polkadot/calculate"},"tool")," as a reference and play around with\nit by changing some parameters (e.g. how many days you would like to stake with your DOT, provider\nfees, compound rewards, etc.) to have a better estimate. Even though it may not be entirely accurate\nsince staking participation is changing dynamically, it works well as an indicator."),(0,o.kt)("h4",{id:"oversubscription-commission-fees--slashes"},"Oversubscription, Commission Fees & Slashes"),(0,o.kt)("p",null,"There is an additional factor to consider in terms of rewards. While there is no limit to the number\nof nominators a validator may have, a validator does have a limit to how many nominators to which it\ncan pay rewards. In Polkadot this limit is\ncurrently\n",(0,o.kt)(s.Z,{network:"polkadot",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:256,mdxType:"RPC"}),"",",\nalthough this can be modified via runtime upgrade. A validator with more than\n",(0,o.kt)(s.Z,{network:"polkadot",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:256,mdxType:"RPC"}),"","\nnominators is ",(0,o.kt)("em",{parentName:"p"},"oversubscribed"),". When payouts occur, only the top\n",(0,o.kt)(s.Z,{network:"polkadot",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:256,mdxType:"RPC"}),'\nnominators as measured by the amount of stake allocated to that validator will receive rewards. All\nother nominators are essentially "wasting" their stake - they used their nomination to elect that\nvalidator to the active stake, but receive no rewards in exchange for doing so.'),(0,o.kt)("p",null,"Note that the network slashes a validator for a misbehavior (e.g. validator offline, equivocation,\netc.) the slashed amount is a fixed percentage (and not a fixed amount), which means that validators\nwith more stake get slashed more DOT. Again, this is done to provide nominators with an economic\nincentive to shift their preferences and back less popular validators whom they consider to be\ntrustworthy."),(0,o.kt)("p",null,"Also, note that each validator candidate is free to name their desired commission fee (as a\npercentage of rewards) to cover operational costs. Since validators are paid the same, validators\nwith lower commission fees pay more to nominators than validators with higher fees. Thus, each\nvalidator can choose between increasing their fees to earn more, or decreasing their fees to attract\nmore nominators and increase their chances of being elected. In the long term, we expect that all\nvalidators will need to be cost-efficient to remain competitive, and that validators with higher\nreputation will be able to charge slightly higher commission fees (which is fair)."),(0,o.kt)("h2",{id:"slashing"},"Slashing"),(0,o.kt)("h3",{id:"unresponsiveness"},"Unresponsiveness"),(0,o.kt)("p",null,'For every session, validators will send an "I\'m online" heartbeat to indicate they are live. If a\nvalidator produces no blocks during an epoch and fails to send the heartbeat, it will be reported as\nunresponsive. Slashing may occur depending on the repeated offenses and how many other validators\nwere unresponsive or offline during the epoch.'),(0,o.kt)("p",null,"Validators should have a well-architected network infrastructure to ensure the node runs to reduce\nthe risk of slashing or chilling. A high availability setup is desirable, preferably with backup\nnodes that kick in ",(0,o.kt)("strong",{parentName:"p"},"only once the original node is verifiably offline")," (to avoid double-signing\nand being slashed for equivocation - see below). A comprehensive guide on validator setup is\navailable ",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"here"),"."),(0,o.kt)("p",null,"Here is the formula for calculating slashing due to unresponsiveness:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Let x = offenders, n = total no. validators in the active set\n\nmin((3 * (x - (n / 10 + 1))) / n, 1) * 0.07\n")),(0,o.kt)("p",null,"The examples demonstrate how to calculate the slashing penalty for unresponsiveness."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In all of the examples, assume that there are 100 validators in the active set.")),(0,o.kt)("p",null,"No slashing would enact if < 10% of all validators are unresponsive."),(0,o.kt)("p",null,"For example, if exactly 10 validators were unresponsive, the expression 3 ",(0,o.kt)("em",{parentName:"p"}," (x - (n / 10 + 1))) / n\nwould be 3 ")," (10 - (100 / 10 + 1)) / 100 = 3 ","*"," (10 - (10 + 1)) / 100 = -0.03 which is rounded to 0."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The minimum value between 0 and 1 is 0. 0 multiplied by 0.07 is 0.")),(0,o.kt)("p",null,"If 14 validators are unresponsive, then slashing would occur, as > 10% of validators are\nunresponsive."),(0,o.kt)("p",null,"The slashing penalty would be min((3 ",(0,o.kt)("em",{parentName:"p"}," (14 - (100 / 10 + 1))) / 100, 1) ")," 0.07 = min((3 ",(0,o.kt)("em",{parentName:"p"}," (14 -\n11))/100, 1) ")," 0.07 = min(0.09, 1) ","*"," 0.07 = 0.6%"),(0,o.kt)("p",null,"Similarly, if one-third of the validator set (around 33/100) are unresponsive, the slashing penalty\nwould be about 5%."),(0,o.kt)("p",null,"The maximum slashing that can occur due to unresponsiveness is 7%. After around 45% of the\nvalidators go offline, the expression 3 ",(0,o.kt)("em",{parentName:"p"}," (x - (n / 10 + 1))) / n will go beyond 1. Hence, min((3 "),"\n(x - (n / 10 + 1))) / n, 1) ","*"," 0.07 will be ceiled to 7%."),(0,o.kt)("h3",{id:"equivocation"},"Equivocation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GRANDPA Equivocation"),": A validator signs two or more votes in the same round on different chains."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BABE Equivocation"),": A validator produces two or more blocks on the Relay Chain in the same time\nslot."),(0,o.kt)("p",null,"Both GRANDPA and BABE equivocation use the same formula for calculating the slashing penalty:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Let x = offenders, n = total no. validators in the active set\n\nmin( (3 * x / n )^2, 1)\n")),(0,o.kt)("p",null,"As an example, assume that there are 100 validators in the active set, and one of them equivocates\nin a slot (for our purposes, it does not matter whether it was a BABE or GRANDPA equivocation). This\nis unlikely to be an attack on the network, but much more likely to be a misconfiguration of a\nvalidator. The penalty would be min(3 ","*"," 1 / 100)^2, 1) = 0.0009, or a 0.09% slash for that\nvalidator (i.e., the stake held by the validator and its nominators)."),(0,o.kt)("p",null,"Now assume that there is a group running several validators, and all of them have an issue in the\nsame slot. The penalty would be min((3 ","*"," 5 / 100)^2, 1) = 0.0225, or a 2.25% slash. If 20\nvalidators equivocate, this is a much more serious offense and possibly indicates a coordinated\nattack on the network, and so the slash will be much greater - min((3 ","*"," 20 / 100)^2, 1) = 0.36, or\na 36% slash on all of these validators and their nominators. All slashed validators will also be\nchilled."),(0,o.kt)("p",null,"From the example above, the risk of nominating or running many validators in the active set are\napparent. While rewards grow linearly (two validators will get you approximately twice as many\nstaking rewards as one), slashing grows exponentially. A single validator equivocating causes a\n0.09% slash, two validators equivocating does not cause a 0.09 ","*"," 2 = 0.18% slash, but rather a\n0.36% slash - 4x as much as the single validator."),(0,o.kt)("p",null,"Validators may run their nodes on multiple machines to make sure they can still perform validation\nwork in case one of their nodes goes down, but validator operators should be extremely careful in\nsetting these up. If they do not have good coordination to manage signing machines, equivocation is\npossible, and equivocation offenses are slashed at much higher rates than equivalent offline\noffenses."),(0,o.kt)("p",null,"If a validator is reported for any one of the offenses they will be removed from the validator set\n(",(0,o.kt)("a",{parentName:"p",href:"#chilling"},"chilled"),") and they will not be paid while they are out. They will be considered\ninactive immediately and will lose their nominators. They need to re-issue intent to validate and\nagain gather support from nominators."),(0,o.kt)("h3",{id:"slashing-across-eras"},"Slashing Across Eras"),(0,o.kt)("p",null,"There are 3 main difficulties to account for with slashing in NPoS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A nominator can nominate multiple validators and be slashed via any of them."),(0,o.kt)("li",{parentName:"ul"},"Until slashed, the stake is reused from era to era. Nominating with N coins for E eras in a row\ndoes not mean you have N","*","E coins to be slashed - you've only ever had N."),(0,o.kt)("li",{parentName:"ul"},"Slashable offenses can be found after the fact and out of order.")),(0,o.kt)("p",null,"To balance this, we only slash for the maximum slash a participant can receive in some time period,\nrather than the sum. This ensures protection from overslashing. Likewise, the period over which\nmaximum slashes are computed is finite and the validator is chilled with nominations withdrawn after\na slashing event, as stated in the previous section. This prevents rage-quit attacks in which, once\ncaught misbehaving, a participant deliberately misbehaves more because their slashing amount is\nalready maxed out."),(0,o.kt)("h2",{id:"inflation"},"Inflation"),(0,o.kt)("p",null,"DOT is inflationary; there is no maximum number of DOT. Inflation is designed\nto be approximately 10% annually, with validator rewards being a function of the amount staked\nand the remainder going to the treasury. The current token supply of DOT is ~1,000,000,000, as\na result of ",(0,o.kt)("a",{parentName:"p",href:"/docs/redenomination"},"redenomination"),"."),(0,o.kt)("p",null,""),(0,o.kt)("p",null,"There is an ",(0,o.kt)("em",{parentName:"p"},"ideal staking rate")," that the network tries to maintain. The goal is to have the ",(0,o.kt)("em",{parentName:"p"},"system\nstaking rate")," meet the ",(0,o.kt)("em",{parentName:"p"},"ideal staking rate"),"."),(0,o.kt)("p",null,"The system staking rate would be the total amount staked over the total token supply, where the\ntotal amount staked is the stake of all validators and nominators on the network. The ideal staking\nrate accounts for having sufficient backing of DOT\nto prevent the possible compromise of security while keeping the native\ntoken liquid. An ",(0,o.kt)("strong",{parentName:"p"},"ideal staking rate of 50% stabilizes the network"),".\nDOT is inflated according to the system staking\nrate of the entire network."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"According to the inflation model, this would suggest that if you do not use your\nDOT for staking, your tokens dilute over time.")),(0,o.kt)("p",null,"The ideal staking rate on Polkadot also varies with the number of parachains (50% is the current\nestimation of all DOT that should be staked, per parachain slot)."),(0,o.kt)("admonition",{title:"Staking rate without parachains",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the ",(0,o.kt)("strong",{parentName:"p"},"absence of parachains, the suggested ideal staking rate is 75%"),", as liquidity is not\nconstrained by locked parachain bonds.")),(0,o.kt)("p",null,"If the amount of tokens staked goes below the ideal rate, then staking rewards for nominators goes\nup. On the contrary, if it goes above, staking rewards drop. This is a result of the change in the\npercentage of staking rewards that go to the Treasury."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"staking",src:a(12410).Z,width:"800",height:"800"})),(0,o.kt)("p",{style:{textAlign:"center"}},"Source: ",(0,o.kt)("a",{href:"https://w3f-research.readthedocs.io/en/latest/polkadot/overview/2-token-economics.html"},"Research - Web3 Foundation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"x-axis"),": Proportion of DOT staked"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y-axis"),": Inflation, annualized percentage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blue line"),": Inflation rewards to stakers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Green line"),": Staker rate of return")),(0,o.kt)("p",null,"You can determine the inflation rewards by looking at the top bar of the staking overview on\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking"},"Polkadot-JS UI"),"."),(0,o.kt)("p",null,"The above chart shows the inflation model of the network. Depending on the staking participation,\nthe distribution of the inflation to validators/nominators versus the treasury will change\ndynamically to provide incentives to participate (or not participate) in staking."),(0,o.kt)("p",null,"For instance, assuming that the ideal staking rate is 50%, all of the inflation would go to the\nvalidators/nominators if 50% of all KSM / DOT are staked. Any deviation from the 50% - positive or\nnegative - sends the proportional remainder to the treasury and effectively reduces staking rewards."),(0,o.kt)("p",null,"For those who are interested in knowing more about the design of the inflation model for the\nnetwork, please see\n",(0,o.kt)("a",{parentName:"p",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/overview/2-token-economics.html"},"here"),"."))}u.isMDXComponent=!0},12410:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/staking-participation-rate-da8419ef7f3e69baa73fa2009cc08cc0.png"},43947:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/bags-list-example-1-2a3130b15af9da6b8d758a8f64f46db1.png"},86078:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/bags-list-example-2-fbeb87ba5de9597dd425d8c12e45c9d7.png"},32478:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/bags-list-example-3-de0feba4f8f41877ed9a9427b2e51b13.png"},13758:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/stash-stakingProxy-55763501f81d78caac1d106518dacecb.png"},93971:()=>{},46601:()=>{}}]);