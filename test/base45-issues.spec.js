const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');
const expect = require('chai').expect; 

const base45 = require('base45');

const PUBLIC_KEY_PEM = '-----BEGIN CERTIFICATE-----\nMIIBYDCCAQYCEQCAG8uscdLb0ppaneNN5sB7MAoGCCqGSM49BAMCMDIxIzAhBgNV\nBAMMGk5hdGlvbmFsIENTQ0Egb2YgRnJpZXNsYW5kMQswCQYDVQQGEwJGUjAeFw0y\nMTA0MjcyMDQ3MDVaFw0yNjAzMTIyMDQ3MDVaMDYxJzAlBgNVBAMMHkRTQyBudW1i\nZXIgd29ya2VyIG9mIEZyaWVzbGFuZDELMAkGA1UEBhMCRlIwWTATBgcqhkjOPQIB\nBggqhkjOPQMBBwNCAARkJeqyO85dyR+UrQ5Ey8EdgLyf9NtsCrwORAj6T68/elL1\n9aoISQDbzaNYJjdD77XdHtd+nFGTQVpB88wPTwgbMAoGCCqGSM49BAMCA0gAMEUC\nIQDvDacGFQO3tuATpoqf40CBv09nfglL3wh5wBwA1uA7lAIgZ4sOK2iaaTsFNqEN\nAF7zi+d862ePRQ9Lwymr7XfwVm0=\n-----END CERTIFICATE-----';
const PRIVATE_KEY_P8 = '-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgZgp3uylFeCIIXozb\nZkCkSNr4DcLDxplZ1ax/u7ndXqahRANCAARkJeqyO85dyR+UrQ5Ey8EdgLyf9Nts\nCrwORAj6T68/elL19aoISQDbzaNYJjdD77XdHtd+nFGTQVpB88wPTwgb\n-----END PRIVATE KEY-----';

const TEST_PAYLOAD = {
  "ver":"1.0.0",
  "nam":{
    "fn":"d'Arsøns - van Halen",
    "gn":"François-Joan",
    "fnt":"DARSONS<VAN<HALEN",
    "gnt":"FRANCOIS<JOAN"
  },
  "dob":"2009-02-28",
  "t":[{
    "tg":"840539006",
    "tt":"LP217198-3",
    "tr":"260415000",
    "ma":"1232",
    "sc":"2021-04-13T14:20:00+00:00",
    "dr":"2021-04-13T14:40:01+00:00",
    "tc":"GGD Fryslân, L-Heliconweg",
    "co":"NL",
    "is":"Ministry of VWS",
    "ci":"urn:uvci:01:NL:GGD/81AAH16AZ"
  }]
};

describe('Base45', function() {
  it('should Sign and Verify a Payload (JSON->COSE->JSON)', async () => {
    let cwt = new Map();
    cwt.set(6, 1620312816);
    cwt.set(4, 1683345600);
    cwt.set(-260, new Map()); 
    cwt.get(-260).set(1, TEST_PAYLOAD);  

    const signed = await signAndPack(cwt, PUBLIC_KEY_PEM, PRIVATE_KEY_P8);
    const result = await unpackAndVerify(signed);

    expect(await parseCWT(result.contents)).to.eql(TEST_PAYLOAD);
  });

  it('should Verify a CH Payload', async () => {
    const PAYLOAD = 'HC1:NCFR606G0/3WUWGSLKH47GO0:S4KQDITFAUO9CK3600XKY-CE59-G80:84F3DCK.DR2F3N7O+6BY50.FK6ZK7:EDOLOPCO8F6%E3.DA%EOPC1G72A6YM88G7DA6RM8GM8V%6:Q61:6U47DR6TL6B46UM8WY8UPC0JCZ69FVC*70LVC6JD846Y96C463W5Y57+EDG8F3I80/D6$CBECSUER:C2$NS346$C2%E9VC- CSUE145GB8JA5B$D% D3IA4W5646946%96X47.JCP9EJY8L/5M/5546.96D463KC.SC4KCD3DX47B46IL6646H*6Z/E5JD%96IA74R6646407GVC*JC1A67:63W5KF6.96TPCBEC7ZKW.CXJD7%E7WE/KECEC/.DI3D-OCMECLPCG/DXJDIZAITA9IANB8.+9I3D5WEMY9$7BO/EZKEZ96LF6XA6V50Q+2:2S:3SUCAXMI8%D1QO8AMY1JA1LJ2BAECVLGN JRLLT33HSJ$Z376WV87OQ5XMRC3G%+C0CD7:4BG3YZTSKEDHR9.CQUBLFH0TNQAP2I3 2C0L7YVR60JY8DI82/NVIU5AI4B6TGF2/XIK$9MWCDAAPKLBOR8C876MHB3$EL KNV9OIQNRAOB8GZ+9NR2MQDIX606IJ*A119K+NZGCT*UCYI/QL:/SQ8VX+KDA9W41N3ATT6WXA Y2SX5$S8XZTNW4-FD-952UE7/3HJGR99Z%3++IANGISKZE5ON4V4IRWQFBPZCWP5SC%MDX0%BN3HOVY38F2:PB7-79LJE/R 3N+SBXPNA:5*YMKKA:BSVIH4634GLC.6*0GY93GZN P38IR';
    const result = await debug(PAYLOAD);
    
    expect(await parseCWT(result.value[2])).to.eql({
      v: [
        {
          ci: 'urn:uvci:01:CH:71ECAC66C4473814B3D05CDE',
          co: 'CH',
          dn: 1,
          dt: '2021-06-08',
          is: 'Bundesamt für Gesundheit (BAG)',
          ma: 'ORG-100031184',
          mp: 'EU/1/20/1507',
          sd: 2,
          tg: '840539006',
          vp: '1119349007'
        }
      ],
      dob: '1979-02-15',
      nam: { fn: 'Mustermann', gn: 'Max', fnt: 'MUSTERMANN', gnt: 'MAX' },
      ver: '1.2.1'
    });
  });

  it('should encode and decode a byte array', async () => {
    let data = new Uint8Array([120, 156, 187, 212, 226, 187, 136, 81, 141, 197, 195, 205, 124, 121, 245, 17, 125, 119, 134, 5, 145, 140, 190, 139, 217, 164, 18, 166, 48, 125, 96, 145, 74, 9, 189, 112, 192, 146, 145, 121, 33, 227, 146, 228, 178, 212, 162, 84, 67, 61, 3, 61, 131, 228, 188, 196, 220, 37, 73, 105, 121, 165, 41, 234, 142, 69, 197, 135, 119, 228, 21, 43, 232, 42, 148, 37, 230, 41, 120, 36, 230, 164, 230, 37, 165, 231, 229, 185, 21, 37, 230, 29, 94, 158, 159, 89, 172, 235, 149, 159, 152, 151, 156, 150, 87, 82, 232, 226, 24, 20, 236, 239, 23, 108, 19, 230, 232, 103, 227, 225, 232, 227, 234, 151, 156, 158, 87, 146, 235, 22, 228, 232, 231, 236, 239, 25, 108, 227, 229, 239, 232, 151, 156, 146, 159, 148, 101, 100, 96, 96, 169, 107, 96, 164, 107, 100, 145, 88, 210, 184, 42, 169, 36, 61, 211, 194, 196, 192, 212, 216, 210, 192, 192, 44, 169, 164, 36, 203, 39, 192, 200, 208, 220, 208, 210, 66, 215, 56, 169, 164, 40, 211, 200, 204, 192, 196, 208, 212, 192, 192, 32, 41, 55, 49, 197, 208, 200, 216, 40, 169, 56, 185, 66, 210, 200, 192, 200, 80, 215, 192, 68, 215, 208, 56, 196, 208, 196, 202, 200, 192, 202, 192, 64, 219, 0, 68, 38, 165, 20, 161, 203, 154, 0, 197, 13, 161, 178, 37, 201, 21, 82, 238, 238, 46, 10, 110, 69, 149, 197, 57, 135, 23, 229, 233, 40, 248, 232, 122, 164, 230, 100, 38, 231, 231, 149, 167, 166, 39, 37, 231, 39, 249, 249, 36, 101, 22, 231, 251, 102, 230, 101, 22, 151, 20, 85, 42, 228, 167, 41, 132, 133, 7, 39, 37, 103, 86, 200, 148, 22, 229, 89, 149, 150, 37, 103, 2, 77, 179, 242, 243, 177, 2, 26, 163, 111, 97, 232, 232, 232, 97, 104, 230, 24, 21, 225, 144, 171, 88, 115, 99, 217, 222, 71, 119, 85, 180, 51, 194, 11, 76, 221, 85, 36, 18, 103, 159, 250, 250, 187, 181, 168, 233, 141, 247, 158, 162, 235, 223, 60, 219, 124, 246, 9, 188, 182, 169, 88, 245, 81, 111, 71, 153, 227, 26, 93, 71, 213, 164, 8, 241, 234, 85, 31, 167, 50, 52, 247, 47, 89, 204, 52, 57, 26, 0, 43, 202, 143, 209]); 

    const backAndForth = new Uint8Array(base45.decode(base45.encode(data)));

    expect(backAndForth).to.eql(data);
  });
});

