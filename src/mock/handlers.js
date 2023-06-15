import { rest } from "msw";

const handlers = [
  rest.get("/api/opensea-top-collections", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        openseaCollections: [
          {
            id: 42,
            collectionAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
            groupId: 5,
            name: "Bored Ape Yacht Club",
            totalSupply: 9998,
            holderCount: 6400,
            floorPrice: 74.7,
            oneDayVolume: 684.12,
            oneDayVolumeChange: 5.7,
            totalVolume: 676345.4057823467,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png",
          },
          {
            id: 43,
            collectionAddress: "0x209e639a0ec166ac7a1a4ba41968fa967db30221",
            groupId: 5,
            name: "Genuine Undead",
            totalSupply: 9996,
            holderCount: 2519,
            floorPrice: 0.5,
            oneDayVolume: 87.57,
            oneDayVolumeChange: 0.04,
            totalVolume: 6582.227960498549,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png",
          },
          {
            id: 44,
            collectionAddress: "0xed5af388653567af2f388e6224dc7c4b3241c544",
            groupId: 5,
            name: "Azuki",
            totalSupply: 10000,
            holderCount: 5006,
            floorPrice: 11.35,
            oneDayVolume: 85.08,
            oneDayVolumeChange: 0.31,
            totalVolume: 266288.519147456,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xed5af388653567af2f388e6224dc7c4b3241c544.png",
          },
          {
            id: 45,
            collectionAddress: "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
            groupId: 5,
            name: "Doodles",
            totalSupply: 10000,
            holderCount: 5370,
            floorPrice: 7.3081,
            oneDayVolume: 60.66,
            oneDayVolumeChange: 0.95,
            totalVolume: 150501.68113921926,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e.png",
          },
          {
            id: 46,
            collectionAddress: "0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7",
            groupId: 5,
            name: "Boki",
            totalSupply: 7777,
            holderCount: 3599,
            floorPrice: 0.145,
            oneDayVolume: 53.23,
            oneDayVolumeChange: 5.38,
            totalVolume: 11301.708118701963,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7.png",
          },
          {
            id: 47,
            collectionAddress: "0x23581767a106ae21c074b2276d25e5c3e136a68b",
            groupId: 5,
            name: "Moonbirds",
            totalSupply: 10000,
            holderCount: 6630,
            floorPrice: 9.45,
            oneDayVolume: 51.1,
            oneDayVolumeChange: -0.35,
            totalVolume: 173229.6907345507,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x23581767a106ae21c074b2276d25e5c3e136a68b.png",
          },
          {
            id: 48,
            collectionAddress: "0xb16dfd9aaaf874fcb1db8a296375577c1baa6f21",
            groupId: 5,
            name: "Nyolings",
            totalSupply: 7777,
            holderCount: 3131,
            floorPrice: 0.135,
            oneDayVolume: 50.89,
            oneDayVolumeChange: -0.19,
            totalVolume: 1837.1162133865691,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://i.seadn.io/gcs/files/26c3a14f0f9f2cbe6080d932a09870d0.png",
          },
          {
            id: 49,
            collectionAddress: "0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
            groupId: 5,
            name: "Bored Ape Kennel Club",
            totalSupply: 9602,
            holderCount: 5554,
            floorPrice: 5.99,
            oneDayVolume: 46.91,
            oneDayVolumeChange: 0.59,
            totalVolume: 110754.80052689523,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623.png",
          },
          {
            id: 50,
            collectionAddress: "0x7df64f69544c5bf71171dc5ab69b8602c2ff1e27",
            groupId: 5,
            name: "Kitaro World Official",
            totalSupply: 7777,
            holderCount: 3049,
            floorPrice: 0.169,
            oneDayVolume: 43.05,
            oneDayVolumeChange: 1.56,
            totalVolume: 3708.4723061641694,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x7df64f69544c5bf71171dc5ab69b8602c2ff1e27.gif",
          },
          {
            id: 51,
            collectionAddress: "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
            groupId: 5,
            name: "Pudgy Penguins",
            totalSupply: 8888,
            holderCount: 4508,
            floorPrice: 2.9,
            oneDayVolume: 42.88,
            oneDayVolumeChange: 0.51,
            totalVolume: 63478.70208181416,
            createdAt: "2022-10-26T02:15:08.256Z",
            imgUrl:
              "https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xbd3531da5cf5857e7cfaa92426877b022e612cf8.png",
          },
        ],
      })
    );
  }),
  rest.get("/api/items", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json({
        items: [
          {
            id: "343d3182-c273-4ea1-b2c9-6ace189013c6",
            chain: "eth",
            collectionTitle: "FrankenPunks",
            title: "#6741",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x1fec856e25f757fed06eb90548b0224e91095738/0x1fec856e25f757fed06eb90548b0224e91095738-6741.png",
            price: 0.02,
          },
          {
            id: "5eff5fde-fb3a-4b9b-a348-1d2c95c7737b",
            chain: "eth",
            collectionTitle: "Goblin Hipsters",
            title: "Goblin Hipsters 6879",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x61ed568becd4d5f58782edeb05ab3872e0222e81/0x61ed568becd4d5f58782edeb05ab3872e0222e81-6879.png",
            price: 0.01,
          },
          {
            id: "5b0d6499-e9dd-4316-9814-27bd572156e8",
            chain: "eth",
            collectionTitle: "Goblin Hipsters",
            title: "Goblin Hipsters 6878",
            mediaUrl:
              "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/8bfd7fc525c83fe946c1bd35e6e8b108.png",
            price: 0.01,
          },
          {
            id: "d5d5674e-a0ce-4c5c-a742-8346e0d2079f",
            chain: "eth",
            collectionTitle: "Goblin Hipsters",
            title: "Goblin Hipsters 9362",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x61ed568becd4d5f58782edeb05ab3872e0222e81/0x61ed568becd4d5f58782edeb05ab3872e0222e81-9362.png",
            price: 0.01,
          },
          {
            id: "cbcf88e2-72aa-46cc-8d63-5825a5b13163",
            chain: "eth",
            collectionTitle: "GhostsProject",
            title: "Ghost #5754",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3/0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3-5754.png",
            price: 12.9,
          },
          {
            id: "9299253b-5082-49be-be1e-9990e6b7cdee",
            chain: "eth",
            collectionTitle: "SYLTARE, Dawn of East",
            title: "Clown, #9603",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f-9603.png",
            price: 0.2,
          },
          {
            id: "068d406d-bbd2-4e09-b33e-d234e4361c05",
            chain: "eth",
            collectionTitle: "Ballman",
            title: "Ballman #4209",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x80ab79e5c36351fb5dbe2b35e97f724eca47ae29/0x80ab79e5c36351fb5dbe2b35e97f724eca47ae29-4208.png",
            price: 0.4,
          },
          {
            id: "684169c3-9b2b-4196-b7a4-bcbe80d12fd7",
            chain: "eth",
            collectionTitle: "Buckets Club Front Nine",
            title: "Buckets Club Front Nine #1386",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x470c27a0ed83f44b09acae49e6ceffd1c7faa6f0/0x470c27a0ed83f44b09acae49e6ceffd1c7faa6f0-1386.png",
            price: 0.3,
          },
          {
            id: "047961a0-b446-43d4-9d18-efae5ad58607",
            chain: "eth",
            collectionTitle: "SYLTARE, Dawn of East",
            title: "Chuck Joon-Gyung, #1228",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f-1228.png",
            price: 2,
          },
          {
            id: "e7e29bb7-b834-49e8-8ad8-be689ac10519",
            chain: "eth",
            collectionTitle: "SYLTARE, Dawn of East",
            title: "Jang-Hwa & Hong-Ryun, #5272",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f-5272.png",
            price: 1,
          },
          {
            id: "c954e6ea-46be-4db2-966f-5649101b5660",
            chain: "eth",
            collectionTitle: "The Rulers of the Skies",
            title: "#427",
            mediaUrl:
              "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/0f57555e53fecec947663eff489d48f8.gif",
            price: 0.02,
          },
          {
            id: "cb04aacd-185c-4dad-b499-f771a9c8333a",
            chain: "eth",
            collectionTitle: "NiftyDegen",
            title: "DEGEN #5910",
            mediaUrl:
              "https://ipfs.io/ipfs/bafybeifuddtfmfnc5vqcuxuyueizczmyqlz2ulawmnlkcmqurwygeojdqi/nifty-degens/5910.png",
            price: 0.08,
          },
          {
            id: "5aef2283-c459-4d34-aa6c-ea19ceae954b",
            chain: "eth",
            collectionTitle: "Lucid",
            title: "Lucid #3134",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x34bc797f40df0445c8429d485232874b15561728/0x34bc797f40df0445c8429d485232874b15561728-3134.png",
            price: 0.007,
          },
          {
            id: "b1601a6f-13ec-4ee1-8729-e51c9a25a958",
            chain: "eth",
            collectionTitle: "the littles NFT",
            title: "the littles #8444",
            mediaUrl:
              "https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0xc6ec80029cd2aa4b0021ceb11248c07b25d2de34/0xc6ec80029cd2aa4b0021ceb11248c07b25d2de34-8444.png",
            price: 0.045,
          },
          {
            id: "ceab60b1-8013-48c0-9c0a-6d2dfabe970e",
            chain: "eth",
            collectionTitle: "GDrake",
            title: "G-Drake",
            mediaUrl:
              "https://ipfs.io/ipfs/bafybeif4auierdzqqy4trqllqurszewb2e45c3f6yphguikrjm2ylsq6my/779.png",
            price: 0.02,
          },
        ],
      })
    );
  }),
];

export default handlers;
