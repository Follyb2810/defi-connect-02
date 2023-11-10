import {FaGithub,FaTelegram,FaDiscord,FaTwitter} from 'react-icons/fa'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
const footData =[
    {
        social:'Github',
        path:'',
        icon:<FaGithub/>
    },
    {
        social:'Twiter',
        path:'',
        icon:<FaTwitter/>
    },
    {
        social:'Telegram',
        path:'',
        icon:<FaTelegram/>
    },
    {
        social:'Discord',
        path:'',
        icon:<FaDiscord/>
    },
]

const NavData=[
    {
        id:0,
        name:'Whitepaper',
        path:'#whitepaper'
    },
    {
        id:0,
        name:'Usecases',
        path:'#usecase'
    },
    {
        id:0,
        name:'Partner',
        path:'#partner'
    },
    {
        id:0,
        name:'Road Map',
        path:'#roadmap'
    },
    {
        id:0,
        name:'Contact',
        path:'#contact'
    }
]




const whyDefiContent =[
 {
    itemFirst:'',
    itemSecond:'Instant Crypto Credit Lines',
    itemLast:'Conventional Loans'
 },
 {
    itemFirst:'Opportunity to grow your portfolio',
    itemSecond:<AiFillCheckCircle  className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'Lower interest rates',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No origination fees',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'Tax-efficiency',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'Instant approval',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No paperwork to fill',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No monthly repayments',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No impact on credit score',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 }
]



const templatetHead =[
                    {
                        BorrowData:{
                            index:0,
                            title:'BORROW NOW AT JUST 0% INTEREST',
                            para:`Join our Loyalty Program and get funds at no cost! Just enable our
                            Low-Interest Borrowing feature to automatically keep your LTV ratio
                            below 20% and enjoy our best rates.`,
                            img:require('./asset/images/borrowImg.svg').default
                        }
                    },
                    {
                        whyDefiData:{
                            index:1,
                            title:'WHY USE DEFI CONNECT',
                            para:`Get as much or as little as you want, whenever you want with the most flexible crypto credit line out there.`,
                            
                            img:require('./../component/asset/images/borrowImg.svg').default,
                            img1:require('./../component/asset/images/why.svg').default,
                            img2:require('./../component/asset/images/why1.svg').default,
                        }
                    },
                    {
                        UtilizeContent :{
                            index:2,
                            title:`How to Best Utilize Your Credit Line`,
                            para:`With a minimum of $50 and a maximum of $2M, Nexo is here to help you afford the necessities and luxuries you are thinking about.`
                        }
                        
                    },
                    
                    {
                        solutionData:{
                            index:3,
                                title:'ALL IN ONE SOLUTION FOR CRYPTOCURRENCY'
                        }
                    },
                    {
                        interestData:{
                            index:4,
                                title:'ALL IN ONE SOLUTION FOR CRYPTOCURRENCY'
                        }
                    },
                    {
                        RoadMapData:{
                            index:5,
                            title:'DEFICONNECT 2023 ROAD MAP',
                        
                        }
                    },
                    {
                        
                        BorrowInputData:{
                            index:6,
                            title:'See How Much you  Can  BORROW',
                            para:`Enter the amount you’d like to borrow to find out how much collateral is required.`,
                        
                        }
                    },
                    {
                        
                        getToKnowUs:{
                            index:7,
                            title:'More Ways to Get the Best Out of Defi Connect',
                            
                        
                        }
                    },
                    {
                        
                        partnerData:{
                            index:8,
                            title:'PARTNER WITH DEFICONNECT NOW',
                            
                        
                        }
                    },

                ]

const SliderData = [
    {
        title:require('./asset/images/cards.svg').default,
        subt:'Make a major project',
        // des:'hello'
    },
    {
        title:require('./asset/images/cardsol1.svg').default,
        subt:'Optimize your project',
        // des:'hello'
    },
    {
        title:require('./asset/images/cardsol2.svg').default,
        subt:'Buy more crypto',
        // des:'hello'
    },
    {
        title:require('./asset/images/cardsol2.svg').default,
        subt:'Buy more crypto',
        // des:'hello'
    },
]

const FagData = [
    {
            id:0,
            ques:"How do DEFI CONNECT works?",
            ans:'helo'
    },
    {
            id:1,
            ques:"How quickly do i get money?",
            ans:'helo'
    },
    {
            id:2,
            ques:"What is the interest rate?",
            ans:'helo'
    },
    {
            id:3,
            ques:"What is the loan-to-value?",
            ans:'helo'
    },
    {
            id:4,
            ques:`What is the value of my collateral changes before i repay my credit line?`,
            ans:'helo'
    },
    {
            id:5,
            ques:`How does DEFI CONNECT keep my collateral safe?`,
            ans:'helo'
    }
    
]

const solutionDataCard =[
       {
        img:require('./asset/images/convenience.svg').default,
        cardHeader:'Convenience and Accessibility',
        cardBody:`
        Users can access a wide range of decentralized financial services, 
        including loans, synthetic tokens, investments, and more, all from 
        a single platform. This eliminates the need to interact with multiple 
        protocols and applications, making the experience more convenient 
        and accessible.`
       },
       {
        img:require('./asset/images/cost.svg').default,
        cardHeader:'Cost Efficiency',
        cardBody:`By having multiple services under one roof, users can save on 
        commissions and transaction fees that would otherwise be 
        generated by moving assets between different platforms. 
        Cost efficiency translates into greater profitability for users.`
       },
       {
        img:require('./asset/images/simplified.svg').default,
        cardHeader:'Convenience and Accessibility',
        cardBody:`The platform offers the ability to diversify investments and access
        a wide range of traditional and synthetic assets. This allows users 
       to manage their portfolios more effectively and distribute risk 
       intelligently.`
       },
]
const InterestData=[
    {
        title:'Defi Connect Card',
        des:`All Defi Card purchases are deducted 
        from your available credit line while 
        your portfolio remains intact.`,
        btn:'Learn More'
    },
    {
        title:'Earn Interest',
        des:`All Defi Card purchases are deducted 
        from your available credit line while 
        your portfolio remains intact.`,
        btn:'Learn More'
    },
    {
        title:'Defi Connect Card',
        des:`All Defi Card purchases are deducted 
        from your available credit line while 
        your portfolio remains intact.`,
        btn:'Learn More'
    },
    
]

const geToKnowData = [
    {
        title:'Borrow Platform',
        img:require('./asset/images/corporate.svg').default,
        para:`Additional way to leverage your
        digital asset portfolio.`
    },
    {
        title:'Earn Synthetic Token',
        img:require('./asset/images/synthethic.svg').default,
        para:`Earn synthetic token by collateralizings
        your asset.`
    },
    {
        title:'Participate in Governance',
        img:require('./asset/images/govern.svg').default,
        para:`Stay active in the community and take
        part in decisions that shape the future
        of Defi connect.`
    },
]

const PartnerContent= {
    subtitle:`Move Faster with Deficonnect Partners`,
    body:`We know your time is valuable. Find a partner
    to quickly
    deliver the Deficonnect experience 
    you need of use Deficonnect Apps
    to simply 
    borrow your crypto with o% interest.`,
    img1:require('./asset/images/cost.svg').default,
    img2:require('./asset/images/corporate.svg').default,
    img3:require('./asset/images/corporate.svg').default,
    img4:require('./asset/images/business.jpg').default,

}

const RoadDataMap =[
    {
        id:1,
        head:`Stage 1: Development and Launch of Borrow Platform`,
        body:`
        Q1 [2024]: DeFi Connect Foundation, recruitment of core 
        development and security team, development and audit 
        of smart contracts for the Borrow platform, internal platform 
        testing.`,
        body2:`Q2 [2024]: DeFi Connect launched in closed beta with a 
        select group of users, compilation of feedback and 
        adjustments according to the feedback received, and 
        the launch of the Borrow platform on Nautilus Chain.`
    },
    {
        id:1,
        head:`Stage 2: Development and Launch of Synthetic Stocks`,
        body:`
        Q3 [2024]: Development and audit of smart contracts for 
        Synthetic Stocks, initial testing, and feedback collection.`,
        body2:`Q4 [2024]: Public launch of Synthetic Stocks, 
        marketing and promotional campaigns to
         increase adoption.`
    },
    {
        id:1,
        head:`Stage 3: Native Token and Expansion`,
        body:`
        Q1 [2025]: Create the Native Token, initiate pre-sale of the 
        Native Token, and launch financial and blockchain education 
        campaigns.`,
        body2:`
        Q2 [2025]: Explore strategic collaborations and regulations in 
        key Asian markets, evaluate the possibility of expanding 
        the range of tokenized assets available, 
        and upgrade the roadmap.`
    },
    {
        id:1,
        head:`Stage 4: Platform Enhancement and Global Expansion`,
        body:`
        Q3 [2025]: Implement security and scalability improvements 
        to support increased traffic and volume of assets, and
         consider introducing additional services like 
        lending and staking.`,
        body2:`Q4 [2025]: Evaluate the possibility of becoming a regulated 
        entity, release version 2.0 of DeFi Connect with significant 
        improvements to the user experience, and expand 
        the user base globally.`
    },
]

const footerContent = [
    {
        item: 'Products',
        itemDetail: [
            {
                name: 'Buy',
                path: ''
            },
            {
                name: 'Earn',
                path: ''
            },
            {
                name: 'Exchange',
                path: ''
            },
            {
                name: 'Borrow',
                path: ''
            },
            {
                name: 'Booster',
                path: ''
            },
            {
                name: 'Defi Pro',
                path: ''
            },
            {
                name: 'Referral',
                path: ''
            },
            {
                name: 'Defi wallet',
                path: ''
            }         
        ]
    },
    {
        item: 'Company',
        itemDetail: [
            {
                name: 'About',
                path: ''
            },
            {
                name: 'Security',
                path: ''
            },
            {
                name: 'Licenses',
                path: ''
            },
            {
                name: 'Defi Private',
                path: ''
            },
            {
                name: 'Defi Ventures',
                path: ''
            },
            {
                name: 'Defi Pro',
                path: ''
            },
            {
                name: 'Corporates',
                path: ''
            },
            {
                name: 'Affiliates wallet',
                path: ''
            },                  
            {
                name: 'Careers',
                path: ''
            }         
        ]
    },
    {
        item: 'Resources',
        itemDetail: [
            {
                name: 'Blog',
                path: ''
            },
            {
                name: 'Media Center',
                path: ''
            },
            {
                name: 'Help Center',
                path: ''
            },
            {
                name: 'Contacts',
                path: ''
            },
            {
                name: 'Sitemap',
                path: ''
            },
            {
                name: 'Vulnerability Disclosure',
                path: ''
            }        
        ]
    },
    {
        item: 'Legal',
        itemDetail: [
            {
                name: 'Privacy Policy',
                path: ''
            },
            {
                name: 'Terms & Conditions',
                path: ''
            },
            {
                name: 'Services Terms',
                path: ''
            },
            {
                name: 'Borrow Terms',
                path: ''
            },
            {
                name: 'Earn Terms',
                path: ''
            },
            {
                name: 'Exchange Terms',
                path: ''
            },
            {
                name: 'DeFi Terms',
                path: ''
            },        
            {
                name: 'Staking Terms',
                path: ''
            },        
            {
                name: 'Defi Card Terms',
                path: ''
            },        
            {
                name: 'Affiliate Terms',
                path: ''
            },        
            {
                name: 'Cookies Policy',
                path: ''
            },        
        ]
    }
];

         
export  {footData,NavData,templatetHead,geToKnowData,whyDefiContent,SliderData,FagData,InterestData,footerContent,solutionDataCard,PartnerContent,RoadDataMap}