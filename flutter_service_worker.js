'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f089239b14efb67207b2babc69d80dcc",
"version.json": "4dc6dcf5350da8b7023e9c3398685ec0",
"index.html": "669b047e876f3c372db7355244b6a5a9",
"/": "669b047e876f3c372db7355244b6a5a9",
"main.dart.js": "fcb86d4f4f90cd86547f186a7614b9bd",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "92f8a2b41b32d076913604c0e869545c",
"icons/Icon-192.png": "95064e01f05c2ad144bef15d36cf457b",
"icons/Icon-maskable-192.png": "95064e01f05c2ad144bef15d36cf457b",
"icons/Icon-maskable-512.png": "90f6428914b4dab20be2879611ff78f2",
"icons/Icon-512.png": "90f6428914b4dab20be2879611ff78f2",
"manifest.json": "1c103825b5cab3ac57ee88a5c6a8df80",
".git/config": "4477077c5cf739f13ecf83d1d3140bad",
".git/objects/0d/e500d341736a0d43e0ce8d3263dfed37cf3033": "98ec6b73ef29ce64b347ccb8df06120d",
".git/objects/95/1e6fe15fc0c7010c203febbfa85c5561646fd4": "5498afd64ad8fc92f47a4b445ebfaf80",
".git/objects/92/54b7fdc6c8ae52c2882be959d47ec64bcbcef1": "a570151ebd47a49b6521313e576917f3",
".git/objects/92/8c6f81b1cec6572a989e56d580785a9fbc9c75": "20b5b8fcf6136bc7d03af9e78f5d0175",
".git/objects/3e/0c7929a3dee750afe297ae8de6aa828936d7b6": "d6a638f0a398dff139d687250e8756be",
".git/objects/50/f189bcb1cf3de3404a7246030acb6f661fc775": "d740667f8043813ade988e813eed7478",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/242645501f9fbeb78e8218717284d34323f4a6": "46d6f27f9e429170106e6ca774bece7f",
".git/objects/68/386271c64582e1206984524b3e99ef25e61f18": "7acb3c1529b83cb8fb18c34e67cdb482",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/48cb5f623f5552838718e78f305980312df491": "ac37cd71da376b37b1e3e0cbc3d2528a",
".git/objects/9b/33a0970b6d1aeb31b25df35fbae0a2deed98ae": "18574873923e9a53e0a527f01b4cfdc8",
".git/objects/9e/c1c685b5edb80669175d3e780dbbe08890a929": "6b59a15e53a072e9985f37becfd1439a",
".git/objects/9e/fd076a1637469a9b6c9616077d6fa97e369e97": "6d3b6b6a4a86923ce8ebc663cae8586d",
".git/objects/32/e7541167fd4d5f723694ad1b7e9f6bd16ca9bc": "47154c5541ee174d62e28678c14bb5fc",
".git/objects/32/7f34907af2e3214c637f18aa5166f1992df900": "12bf2202823d2d0bdd526986b3aa81af",
".git/objects/35/85b3ebd464821cfb8fdbc0f3cc7e5cff24ccc7": "183b356a00fbdc4a0007c617e636f0e5",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/ed648df85a85ee1f89a2b35074b54e5170ad05": "f45247ee2680769b2525844d0aa3839a",
".git/objects/69/a430de7949882bfe7cc7fb5272352dffe75178": "1fc76adc0cb1d3de78a2395e01ad3553",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/3d/4bef3ff6778e6db1a3cf1e09f2c122cd5cf463": "d1bfc2b59974832d7dde1b6a615c558b",
".git/objects/0b/dff9f65a4d58272725c8df768b62b06b5097e0": "3dde79065668a5a2c6ea9de12927d950",
".git/objects/93/a13321da2eda72b431251c03333e896219c07f": "f6588d315ec7b58cb8e7edb9aff4474c",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/cc5271099e04e29eb951fb9289564cd6762641": "6f0c9b730d765c45c0d0bf1a83ff7a21",
".git/objects/0e/7d34a5418ec9ecf71e242fd29e941ba423ed16": "659aa3dfd3450cacb687baed9bc0e0db",
".git/objects/0e/bd1df8bae64d4dcc19181c18d4836df6da4240": "46ca9f87f66b0441aede1a1cd3bed8ce",
".git/objects/0e/f082c7ef676510f777b89ad2a2c0f591f25c3d": "329440a3903d3701a4f909bf7c10631c",
".git/objects/0e/d3191b0345956cd98b10ea1144f3d510568556": "619bfc5d2a8be7f2309a74ca01f09798",
".git/objects/34/fa4d6995fb8e7562aa7f416ebdbe59f59b6b76": "3b6548e67ea999feb0ff58cd80eda796",
".git/objects/5f/8fc03a3f8d9fd2116aa4be4c07eeebdf2e847f": "5bfda9e372da6d3d92c62d3fc291a7d3",
".git/objects/9c/f4d2269588c75ccb103b758537854569b82cd4": "2fc6ffeaaa52b2fe348254eb0204be5b",
".git/objects/a4/ede85ecd0296345f7ed169361426f122d386db": "8b199298bfdaaefe99c1011955ca3967",
".git/objects/a3/f4138c10c9b6e555fa0dca370b37b203b80328": "5a886289319dded12661813303bdaacf",
".git/objects/b2/601963d9830b80d49639dc269eb0bc94436cd3": "316f027f88c893b13731e3d49649fd64",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/0d37c1d654fbf600925e7afe9ed2d026fc1613": "107a5859fbdbfd968abdb259d0f40ddf",
".git/objects/bb/056a84dc7eda1d88b2917c51b6926bedcd27c1": "be0fbd65ddae3a6ae2b4bafb477c5f77",
".git/objects/d7/d736030af0e0c9000c6793b2119a858833711b": "0d59e5d63072694cbbbbae12304a126f",
".git/objects/be/2c6626bfaeeba957ee4ecd8c7ccd2d6e61636b": "8df23e953d0ad6ebc362536099c1696c",
".git/objects/b3/81bb3599a0a60074833abc0b178e415b887c48": "76429f01091dd2701695de934c95d2cb",
".git/objects/da/4876733295e0a5cf38074e9d4ecfc2d84ef8fd": "e4ec49054558edb840a1a7bb09da6b08",
".git/objects/b4/ce6d4d2511890b5af57657ad27f37dd5aa0d95": "6551221f7fe4bd2d661cdb486e25b213",
".git/objects/a2/c1855b87d8bdec07337ade523e3f6bc35092a4": "e1515e44780179ceca8c4247101b60a1",
".git/objects/a2/8c6f706781d522e054460e2b7c8e9e40403c36": "b13459a7d930f4d1b8129595c0a4f235",
".git/objects/d1/577001026b76a496b87786c2f00e8e2874e5ad": "9d4b776bef252299a8e8688dd78a3509",
".git/objects/d1/6737288389335dbb22624af824834e781dba4e": "127e6bc178b94b9adea9b59fc51e131b",
".git/objects/d6/2daea793b7ae0f69da0b0fc27d47d2a50fc985": "632055335cf546ae8e085e0dc5c8eee1",
".git/objects/ae/c7cc052af4d116a2c111d32431aa9d7377b17e": "c15889aedd32546abf3c1d65600a0a61",
".git/objects/ae/4425088eaa4b6fadbb7ea8e85905e2ef124d93": "830f19392b967f208bde577192292e8f",
".git/objects/d8/5ba10d791c3ae1674e64c91602b1b2ad349ad5": "979fc3da3f5a094cc02204f90ae9a791",
".git/objects/e5/dea9a8cc14782f28bad3731f88519efcca6c8e": "3cf91cbb88311f1e0a620b553d54ae4a",
".git/objects/e2/739eada5b3b071b0686496ab4be4cca34c1c2c": "6991c458dd3021d452acb579b165e266",
".git/objects/f4/86176bc349c94e87159fde4c3bd6f39283ebe8": "4ac54cdb1c17cb2aa24de1a0edc7f282",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/ee/200445756f6bb50bceac0f7b8c76a720b90e99": "d459465a77986eedd968d8e90745f2a5",
".git/objects/ee/572492d7e54aedf939c4d12f2a90cbad61a98b": "f060a664f05a287cc688026b1493d102",
".git/objects/ee/cf3d5c58c1b0ffd02092e6ca3dab9531b04e35": "aa743f0b224fa8b514c47afd9eaf2203",
".git/objects/fc/cfb88883199700d6002257357ad45a0f613926": "c694ec1e39d45a52d37273d56cabdcb1",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/6599dc752d273fcd2e6ec257ef0b1ba05446e0": "221e858d71a94bef50a27731c4590bd7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/943916d1420467d0ddaf049c65806f54def734": "efac2203ce3de1411a40b9a6679d31db",
".git/objects/cf/12353f4772d72e72d4367fad5a9d0f13bd6a8b": "207654ecd6cd01ab6db39434f266083f",
".git/objects/c8/b20a1237441bb7ce6063929660e36d6813812c": "bcc4d014d952034ef97844791e9515c8",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/2a4799de5470900c49f9623148a32c5f984446": "1c48751598feb1b27cc186bebb13df96",
".git/objects/c1/eb78f113b73990ba8eea4f92eaf21ecb0d3279": "9cb253536d269877cf34f391f4345e75",
".git/objects/ec/210ac7989dd0b7bec567b6ce08c73a98798222": "9a4eba21eb3f16cfd5c65776f91a4379",
".git/objects/20/c46de43d847481ff8af0bba6b241c59d0a76b1": "a0f390b9a5f443bb700073b25df5bdde",
".git/objects/4b/bb6cca4687c6c119c37f2bc6c80c0648b46d66": "da36d067f7c5edb8d44f06ea6291374b",
".git/objects/4b/e47cdfcd7e5e00e1a2f35e77f09ac537e63a34": "12c1b9fc345ca346777b9f9428e419b7",
".git/objects/7d/19427a5343ef22ccdab81d994b59c914235f7e": "8d5f0d0174279260a3008129e680add9",
".git/objects/7d/f76f57088a71c2260ed1d397c76cdd0a96fc9c": "432561b6cae305bc955db0545d2cb658",
".git/objects/29/5ea75fac73e48ec1beacd8d1103398a76fe365": "538753dd818c62a8c028ccfc061082aa",
".git/objects/7c/5eb160ed625e565a27a10132ab3d7b96715237": "a7e81456685cc317110d4d3a6d5485d4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/faa744806490f4a1632095f9c759283f1fba5c": "080bd906c21acfbaa304d5bb8c3c7275",
".git/objects/42/f5f521ebb46113ceb68fca9f3b3c1e95392f8d": "be929c715c312d49b42f5f0ec0cff3be",
".git/objects/42/e6074c58f37392f60a32082267e913cabccb3e": "30409e7cb4d1fa777dbc385d89208540",
".git/objects/87/64cc6ac6204b9580e87b575462f8ca1d7c758e": "b829794928da6d297a21316661d66b43",
".git/objects/74/3afa1cc6a474c016308eba4ab8cdec566c5786": "3913f95b6d03a265186468f03d130e2e",
".git/objects/1a/25c11816a47738c3c47ba58defbd44ce644746": "05ff461be5f26391a50995d25f6a6706",
".git/objects/1a/966238d601b125f91057be1a3f0d3c645fd16b": "55f1bf8c8d29df66b1692f7bf502b506",
".git/objects/17/4481bd1e34c1eb6e958ee466ca184fcd51570d": "f5ef2288b2968ffdd0bf14759fdefce2",
".git/objects/17/6c1757a52900c6c98d6c802070052684c2ccf6": "45fc763b405c7c16705a8080683bdc03",
".git/objects/8f/a265c64343dd684b9cfb9c533a231bca94bba4": "cf2c2ec8e61872f7a9b1868839a1d931",
".git/objects/8a/c71f4b048b4c77e9a42d3b9e7a677387fa5a56": "279dec6e946d50c82474de12eb2586c3",
".git/objects/21/5c68afc5c0ba783c5cbf4fc4040f0c844771d6": "40d5c6fb9d0c440ba1e4097d047d98f1",
".git/objects/21/2c5e314dd11c90a3dc33d15491e24df3291a5e": "54505e2d65aa92acce1345a37ad17d94",
".git/objects/4d/3171f836469e73deb66c658a2333a42ee46fc9": "250ec24b5853c167c15cae65b1b73571",
".git/objects/4d/82b9c641c732e5837aa579c3db35a04710ac9a": "006fed7cba924a5640ee617f9560910d",
".git/objects/81/28c8154006e7f4225b27438999309af8071d91": "07557de02e29a7d3bcffd697178cf416",
".git/objects/86/349b63f3b6e17956c9f119f11729348609a780": "bc21c0f55451d8bc2bb8d8c85cdb0e44",
".git/objects/86/a8b1ce575d00408abcf5c119645a80bf698b9f": "187286abbd7399b7214f55949e59b0cc",
".git/objects/2f/0c730b3ed1547a761078f578329315889c2e9e": "4910ef46ce9cf4b4c6fe7b95aaa40cb1",
".git/objects/88/28af0c6d1fc00fe29d153f80facb09504ca12a": "89340f626b61aeeee583e11ded027243",
".git/objects/9f/2de429496421b7bfe050cc372aa8062d38f4ca": "22b5b06a788e433279739268655de2f3",
".git/objects/6b/291579b337c2af38ac04bed311980686d45483": "46a20ef44a556f33ffea9df062a221f0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/1edc03e3df32dc4964828e228b8d92fe072f9e": "4a8d9aaddfcd1be90a585c26a31b9f7e",
".git/objects/6e/8271b5b4347da4420bf4844ee660ffa1c6d78b": "d7876ac4164ed9aa8a38e5ece2588663",
".git/objects/6e/201a2ac053c84c49228570e150f8a427c651d3": "5e481f75c0fe117f0ed12d51791a41b3",
".git/objects/9a/76f2d1dec95fdc5d650e659abeed9f3ac5b621": "6b166b8d6f3fbf59b829168c763ca3e8",
".git/objects/9a/7ad64b93a3cf7fbb5057525204ebea4fe7b740": "9b3bb9186cd958d8e022461db46fdfd4",
".git/objects/09/d83ad4d7935a4581281f1479e6296d0465bdad": "6fa26d02b9091da6e097787382ea8734",
".git/objects/09/6b68f7eac1f86ca9e91074329746b04e57c1c6": "c4ed3e61747f6916ea8fa65306dc740d",
".git/objects/62/77799a6bb183762dded654bcc6b922fa3c5920": "a21cb11d16dc2f795bc8fa8eed9300c5",
".git/objects/62/9a4ae2fd1c23f1a476f6dfd3f3ed05c2b2e882": "16e9608bc151f45ec488772a46e6794e",
".git/objects/96/0e0211d385632434f445bf694dfa2194050e78": "0699db48997a0a23e2befd0dc506e13c",
".git/objects/96/160a264286d1aff2d2092bf460492d6ba68b45": "b71a09cfb5613555f7c3af3f59e2183e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/32704618373bc26a2873fee1d9af8a02601bd5": "26be475eb74681466d72d9ec4f0f6017",
".git/objects/54/e423ddbe749edac4d70fce6068105de8b1fc73": "62a884196a2b7753ed7b587b74423576",
".git/objects/54/d39ef7be7724e3fcb0b3df659e868b6d6a6f56": "67177bdd119f2f48e0184e4224c7f1f6",
".git/objects/53/78a7619ee435018c9a07c6b0217354456ae246": "85a597edca25c3c0a279aed11b4ff6eb",
".git/objects/3f/20ffa4d7140caefed996ca515883e3c15df5e4": "493355dc84aa7ce01dc08885c912368a",
".git/objects/3f/f3874f6215020fd66e20c0814b2181ab6bc214": "10974201914ff21467eb7283d9a1d8ce",
".git/objects/30/ae4b3b8ce2b0b9199a7598aff8d21b14b638ac": "1f889d6ef19e80b4d6d45df892218cb7",
".git/objects/30/a937e11b664e88756be30c905c77a3a1b6a844": "ea4c136f8a90a0ba30fcb9cd9b5f92d8",
".git/objects/30/ab97bc7fc4250ffb959d7356564d06448cad6f": "05f3b5a56474e17c193782792f2795b7",
".git/objects/30/40a8ed2dd7bffde638ef1ae500c56a73835614": "265133814d60498cfa28fed27d248d3d",
".git/objects/5b/8f757ea6f2a0c581cb73367b1611914397ec3a": "abbee1828e808be4545da0fcbd9fe154",
".git/objects/5b/15f56743bc9a6cb104ec943bd6a8a8766ad896": "f93f122756b9a4f7ee10b4b5f7330744",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/2109c62af0473551b13d0a02edbb76d711067c": "94afc9fe3b61d9718c1fadcf6cab07b6",
".git/objects/06/2b379f549c0ec7935ca09d41c6560d2b93ff67": "c5b3795bab988a6ce18d8458ebbc7210",
".git/objects/39/968a61fb993e80cfc5c1c5aeeff236a3b4a4d4": "26f0a69c52fb31ee4dcdef8c4ec74b6e",
".git/objects/39/ff1a8451992c4161aac04a82f7fdaa8ded5a06": "4728efa31224292dfdb8c9e02807f29c",
".git/objects/39/7cb80ef75cc848b818bc8ce5a0fba64c0fe1c8": "34f54bf0cbb9b5709b080bda433cac63",
".git/objects/97/0f4fa82fe774cc0b263586be46de8d723bcedc": "00b8385551259510e688eb787c0527c7",
".git/objects/63/a8e6809ae8842dcc912f74af2e62ca6baa7fd7": "7ca7a8334c66c609986a062e301e2f67",
".git/objects/0f/81c061dc8b3e61513de14d940b5e7368a1df7d": "18d4b336a5ae38c3c4a5dde8dca34f82",
".git/objects/0a/5453b17a5f9ccb42fd0713ca5fed5a471ffa9c": "8471efe61a80d1762e18623a2117e2c3",
".git/objects/0a/ea8e019d1e002c4dfdd6ae5bdea72c42e85e4e": "7640a8b0ac2dca6729ee7ac636d073da",
".git/objects/d3/e010ff80fff97c3a3c86427abb762ea6f82b55": "0d105128d7534ba78d7a8a00dc6792c0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/cbf291c0acb8852e78f815e759df20addfb0db": "c812ad21c08ca76ff6d144ae9a07c9f5",
".git/objects/b1/701caddfd9b1905d99a14e7f81a9497d3f3f68": "a7955de5465a93119c09d657ab401b59",
".git/objects/dd/c95e038589bc211c2ab6ef3dcb2ebb65fbafbe": "6236dd58c35216c20186257476f22557",
".git/objects/b6/5c6575bcca9b2f77dd673d95d0ab2063bacf32": "af787f3aa951b775664d7a883ed61cdf",
".git/objects/b6/3f4d62081924d8233e9dc1bd67b949a668b07a": "e3b0f1b3d179ba7590e1ad0ecbe298fc",
".git/objects/a9/ec08990af33cc8dc46342e4bcbc5f490dbaa5a": "ace52c16cd6eabd3774477862638f0c8",
".git/objects/d2/00dcc861583e7884e1cb1a1fe3e134da71bfd5": "7565e56d6a154a6230b7e660c5954993",
".git/objects/aa/1bee2ec9928dfd54700679ae0078833e6784f4": "6d070591ebe557bf44ea4aa6cec59e5a",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/de/77f4c3dc04b0c45a6f59ed8b9071a40d5e2415": "57203e4de6bc0bcb58051052620eb0a0",
".git/objects/de/0a4ba516204a706adce97f02a23d30f6e41935": "e93e5264786de09404996f0f12671f68",
".git/objects/de/fc7031f8d4c72b1d11ab9350c8803b44960331": "844bcf8edea7b0322444f605758707c8",
".git/objects/b0/d70d885cc84a17f8efb2244b98c9bb2497daa2": "bc5f707889968edee6ed8e1bf9092d88",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/f692dc472b645b883bd2f6cf59a6d43744ca58": "d52f17da9c372c0db4e96ff3264a3d87",
".git/objects/c3/41bc339fe9f043f29fbdf52f4837df51fc2e22": "3281ed72385515eb33b70a7112ed0cd6",
".git/objects/c3/4017647071fe450d40decb49d8c4aaabb92c90": "0c89273780380841c6e61bfd4b909571",
".git/objects/c4/8226b246e574de5933189c3e7df7067608d246": "3b9d14abea0c49c01404941f5485ba1e",
".git/objects/c4/9c60338c6167de2119fd9ff7c10403a6bebe36": "dda5dffdf1ca8e438d8550a17b120b2e",
".git/objects/c4/5b0dcad5dc06dd69786006e27d60ee365179fd": "73b98d7265cc9f7b50103ec1b45e4197",
".git/objects/ea/cb9983eb64b866691ebb08c31bb9d962178f0f": "10d339d6b5592b82589ce9ab59089455",
".git/objects/cd/ad8c8920e3a386c6b8f3df3c696da7b6a390a3": "906e20f1dc8e1a1465d4477717a57b7d",
".git/objects/cc/3589db5722489e57a62c2289eedcfe32fc8b99": "7d5a40b48659fc193d7e106f5aa6a878",
".git/objects/e6/b2e92f078967b827c7355f0165e71e39bc17ad": "7fa61f35cf76f04ffa779dab88b1781a",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/443ec24a84c838d9d2846ec1123fec11245a41": "c83b5d3a0a86699930d72562be2f2d90",
".git/objects/e8/88218e7fcf37c51659a8660a75cf01ed962038": "008df0f4f552359e03e5c8c7a0f792b8",
".git/objects/fa/cb601dae09746e40f4cd6a7fc1305b3157e5c0": "a719494bd3f3422fdf5ee5b3d24fac24",
".git/objects/c2/ecf62589459f651dffd87499d04503b048c012": "db3fd73fe22da3044425d12482ef7684",
".git/objects/f6/719ea0ea1e1dfe7f2311c8a235eae0ca4bb897": "687a6b1f0428466664061a115c6f051a",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c6491d55e6f315505e08acb864fa13e863b1f0": "ba70876387026a751b4361de8519d6b4",
".git/objects/e9/f4d7fb19dc3655a098d6728cb3784391abfe0d": "a8f6daa5c63df6cd46084abd970cfe2b",
".git/objects/f1/856d8775f62f31c89428492f45e82568b22e7a": "8f76436bf8a050438da20c567fabfed6",
".git/objects/f1/d3ffad00186124e5f6360171e947450069978b": "11596b0f168bca4201d231cb9ead7b8d",
".git/objects/e7/e6fb827153eee3b5965c0e73c915ac7a620884": "b50bde9010dce68bb3daf5df32260fcf",
".git/objects/e7/e76afe3918a4654e86152133dc9cf9af980aca": "0b042c646d03fd1745c12cbbc7a92d49",
".git/objects/e7/d47afef490b514e72c71ac597277f232db35ef": "e45c38695f626967de50b09d7ff1ae61",
".git/objects/e7/fb1accf2f6e24c355a8c2b088a0956faee668e": "605d6a3d98fc4d35daea149620a93f5c",
".git/objects/cb/e56387df9024643e41450d789c5a2d7606c4dd": "3045a65cf89e0edafd2d1bc5e67bed5e",
".git/objects/f8/f0e825d624938eb1b536ddec1186fec49796af": "fae7083ef93e34e5cedc39bb20d41b4d",
".git/objects/e0/afcbbdcb4a21f48ccfdfacfc10f7b6a5fcb2fd": "3d3c218fe7ffe567557e72d586a26823",
".git/objects/e0/440172561fefc289d151c5a83b609dbfb9623e": "8c2289ddcc9968912cb1219b7f90cefa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/777680602ba0ca7592547b26686c5bd47565ab": "cf11fa063e8cc7e9464db0ebe75867ef",
".git/objects/2c/8540d9c7a42e6c89d50dbaa2eab0c844597f15": "197222987bed102981f4dc2bb6205695",
".git/objects/79/d945ea0508889fc3a96fc4af24e3e41dbe6fa3": "f1286eb24fbe53a0d3c97ba57e04206a",
".git/objects/2d/9444a4b3d2a0dc32abd806ee60b0c798a63c87": "1809e1831b9a10d9e19d71fedfe07267",
".git/objects/41/d18e5b10c337e99c99e2cda6f748d176b31ee7": "e5e4a6a963ac8bb12bcebc0c22b5b299",
".git/objects/1b/fe9c90baa9703c9d98d0e8f2427918b42b0551": "a1dfd23c0e270f31c256017fb5c48d32",
".git/objects/48/e126cf669fc1ccffb0927e884c042c1989ca7c": "178c035adfb474db4e5327af0cf9a87d",
".git/objects/1e/65846ec0e6ae741211286bc078865f589637b9": "c0144dc67b3ae77133eedec10e161267",
".git/objects/84/4e7069dfc1b4144a9f6c9391577ac7ca68ce34": "6489725d10e31e1cd49be3225b5c47c0",
".git/objects/4a/8f41f33984ffe6a55cf1b7418625824dcbaabd": "ad5d386247894636281bb55b0e954766",
".git/objects/24/3b701a85f06c3555ca86066f9e337c56cb373b": "e33dad97fa1f6bdd41b2cf9ccf4dd32b",
".git/objects/4f/b40c50ed5ff0e9c4147e187662e46b45e3b804": "c594bf06291c002001108d41deb6a74b",
".git/objects/4f/494f3878ef69e0ae026f93c1d581625b9cce6a": "4139d394fc8cabc73226fcf4e27980c0",
".git/objects/4f/f08fbbbb3b4bf38fac23e809c57bc8a6d8b0d8": "513346ab9cd6992cd38c66cd276afc50",
".git/objects/8d/4cbab5d7755c36f02da6933f474eaeb26f90d6": "46425f7e4eb1fea765afc3e5a727a530",
".git/objects/85/ef0fa2186d66df67441688b9eb9cd77fd1b72c": "48cf4e3062800901067fb87f0682b8cc",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/d91b28aedc4802cdd6c5ce3c5e6d6a315c2fa0": "872024d294d7dc20cfd1fdb56cb2a743",
".git/objects/71/a39074632db9072203d5e53e073687af3e6164": "e8b33534a4a5730fbd15186ccc03ccf6",
".git/objects/76/f52a1d5ed6a27642e4c77268ca684560b34645": "3ba54d80b679ac2436a26ef67b52d9d4",
".git/objects/1c/2a3b726eba8d99c8dc968dcb702139d0251437": "7f2eb0b970c37e274ee888377799eb86",
".git/objects/1c/e06b96f94f3b452264788d9101fc85a2277d95": "b681fdfe04e4ba5bccc0eddf68f73979",
".git/objects/82/8680770c6d1b3e599de845940e482563eaef6c": "4b415cfba53d13018d072d98f50dab5a",
".git/objects/82/5f6bb05616fe9d475b216f1d69ec514b35a8bb": "09115975792b62dd8b7ec146393ccb57",
".git/objects/82/e893df39296d184a3bc4cb5b86656d355d82db": "479cca1b006f58755d1c83685a595f6d",
".git/objects/40/c11033870c4af3981c8fa65fbf6348a5e3edb0": "6a3bfcc7118f4241b2d59911afc63230",
".git/objects/40/89cea213129a2d4130675a5beabc2a5c7ed3e3": "727ad91e21bb2bd46ef8dc019fc949b2",
".git/objects/40/8a6864f14ad528fafd46b5c7d73452d0fd1741": "208b752821e9a44ee72a73f16b7f8e24",
".git/objects/2b/cc19cf756afbb49543763154cf549f48cff2f9": "7ed737758f8dced52689dd923f607c91",
".git/objects/8b/c480971de398e5c5c85773d46716b98c4fcc81": "3e2ce5b4cc6c1b7a75a390d94c548d17",
".git/objects/13/39521db5f463ed0178047fa65583a73e1b886d": "bc4fce26a31a7d3b241f941c3bef9deb",
".git/objects/7a/98419b1fc5f3588b5dd0a987c1e2b730f2df0f": "4bd6c52d7e506643b5b83fbd17138a1e",
".git/objects/8e/667c9fc2cf94837f2135a46d555360dcb06bdb": "51d828e6f314f4bc6dcc3c68b2a134a7",
".git/objects/8e/eacb438c98436b51ed623e85d80fb80f7ae480": "b2aeb9a9dd9f78d6fd7c55d21fd0826d",
".git/objects/8e/f436486aed446266973d600f0932a523753b8e": "175e0f28f797eb110277f995b3afaa80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d04e6a704bc221f51b123b9ffe08ac6",
".git/logs/refs/heads/main": "7d04e6a704bc221f51b123b9ffe08ac6",
".git/logs/refs/remotes/origin/main": "08685745f9920e369d3e8110256e185f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4d61ca2bbf55c6d21f4d367b6b526ef3",
".git/refs/remotes/origin/main": "4d61ca2bbf55c6d21f4d367b6b526ef3",
".git/index": "81849a4cf0339ec3007d3cd5237dc12d",
".git/COMMIT_EDITMSG": "85e4fc802ad96f44cda033977fb26b59",
"assets/NOTICES": "d8642b8be35e293128627cc3623bfd41",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "cbb1b9ffa98f5aa564f950ad5587f45e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "daf6ed7be2f7398dc32a45ff782bc7a0",
"assets/fonts/MaterialIcons-Regular.otf": "dd48dfec29e894444128d5b94308ecea",
"assets/assets/almukafaa_alyawmiya.svg": "b549698ceedebccb8e60d1127ea2a88f",
"assets/assets/huroof_gold_left_blue_right.svg": "997e2f7a95f7020541c398aa73b1a9a2",
"assets/assets/sfx/correct_clap.wav": "1e5a510ed083a1987f54e39c9122b1d5",
"assets/assets/sfx/typewriter_key.mp3": "08a92f5837f151d771e9ac3f3aeb5f45",
"assets/assets/sfx/counter_tick.mp3": "1846e1c80940af3ccb88c214f864d93c",
"assets/assets/sfx/wrong_disappointed.mp3": "393f3a696789cf34e37010b69746abb4",
"assets/assets/sfx/click_soft.mp3": "c11d72a143e415c351c274f3fc82bbc8",
"assets/assets/sfx/reward_coins.mp3": "8a803a63a936f4dc821cf01c13d3dbb3",
"assets/assets/sfx/correct_clap.mp3": "dd3b89107154bd8422f9880fc60bb942",
"assets/assets/sfx/counter_tick.wav": "f954921ecc9dbef49ee430cdef0b384e",
"assets/assets/sfx/wrong_disappointed.wav": "8fa77d90403f2e98184203ad69ff5640",
"assets/assets/sfx/typewriter_key.wav": "3e32301ee0b423ab3b499b8cfc1412db",
"assets/assets/sfx/reward_coins.wav": "92757345b5fa834f687337f0d2d8ffc7",
"assets/assets/sfx/click_soft.wav": "66bdea76ae64624afae4a07ae2ea0bfa",
"assets/assets/akshat_irbah.svg": "d182b95277651058791487a09c40df88",
"assets/assets/icons/huroof_gold_left_blue_right.png": "77b06e047afab63ce1972108cc0018f3",
"assets/assets/icons/huroof_icon.svg": "c8ed0d89a536c3c6604b694adfd51925",
"assets/assets/icons/huroof_icon.png": "10d6b5ba4ded8dbca4b9b0455be5f76d",
"assets/assets/podium.png": "f21262ffa8f53b27cec6b139e9cfd4fa",
"assets/assets/ajalt_alhaz.svg": "131f603d1a3b32cac161706b33c373e6",
"assets/assets/questions/narration_manifest.json": "f0f4da1b5bd204054cf663aec2a0937e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
