const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, signAndPack32, signAndPack45, makeCWT, parseCWT, debug} = require('../lib/index');

test('Verify common_2DCode_raw_CO11', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHNXO2GAHPUBCQT%PCID:D4PQC%CM8W4.QN5DOW%IRJO/EGPJPC%OQHIZC4.OI:OI8ZA80P2W4VZ0K1HVZ0VON*Y0*/GT/A4%4S1LJCAZ95Q75M34VJ53XOA K%KIO4KPK6PK6F$B7$KN+R$FK8+S:RA39K9-UOH2ATP8$JHG4TNOVCTA KK.S-DI.SSW*P*WEZ-S-YNWCK+7B5KDG/BWLG1JAF.7E70*LPRT29+KCFF-+K*LPT68 *L:O87YJ6Y5-N1%%HR%BQO3-WB*T5LU9YQ1NXH$%HT%P$R15Y5*T5AW1OH6*ZUFXFE.R:YN/P3JRH8LHGL2TK96L6SR9MU9DV5 R1JNI:E4I+C7*4M:KCY07LPMIH-O9XZQSH9R$FXQGDVBK*RZP3:*DG1W7SGT$7S%RMSG2UQYI96GGLXK6*K$X4FUTD14//EF.7VKM0$89NT2V457U8+9W2KQ-7LF9-DF07U$B97JJ1D7WKP/HLIJL8JF8JFHJP7NVDEBU1J6+2FCMBSH-87*J982AM2SBUM/$1W3F8ZPC3OP35NC4WWAOQQXJCEV6FVSZG2Q%BE%3G/6-*MS.3F7WTJR58OEXLO9JP+U/VDW:I.D6NQAETMEZPHB0OQ4AHJ';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO3', async () => {
  const HC1 = 'HC1:NCFTW2P8QPO0PS3PJ3H0BZHLZ+L:ZI%9STWM4*P-+P+1F3E3%UNW$JQ%NDWM.UM-04E4Q2ZIAEP/JI/Q49+M/Y16*1ZEHH.4/%9I1TS%VW8US0VD6K9%FMBN/$UGPUZ3LV-UM-FN4Q7*JTAED2RVBCKFSI QUW9GK5P1IVD9KJ1OFNBGBPCNSB3MIIZEBNZ6536100L8F/PITG9O84DI1IE0%T4D3TAD3YH0S%8JKKV*MMKKKJ5O%5W*V2 E778/MJS22Z36MZ8HCNTYAB$0XZ8D*GVWDL:21IMI61*REQDN1GOQ31VFUOA8Y.5I9LAKC-I80RJAJL1LPBX33XI/*E/SML85EMKMM0KOA/%2FU6KS7B0AHPID9HHKD289Y/OH*OJYH9W1 %CR-BAW5EZTY/F$SFREF:%E9*DE%QM-BHOAM1PB3KD$O$D7US4UNCER5J2N1N1LA8$HQ-I64L4:3J4CONAWVIID 54G3E/B58U7-M2JUI0VZFDQD33.VIZE:7V 7OO4V+7O$RVS+J2HLW AQ/5JI05ZTU5SOX279O1R6706Q2UGCP75V%9I17G';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
  expect(await parseCWT(cwtPayload)).toStrictEqual({'ver': '1.0.0', 'nam': {'fn': 'Musterfrau-Gößinger', 'fnt': 'MUSTERFRAU<GOESSINGER', 'gn': 'Gabriele', 'gnt': 'GABRIELE'}, 'dob': '1998-02-26', 'v': [{'tg': '840539006', 'vp': '1119305005', 'mp': 'EU/1/20/1528', 'ma': 'ORG-100030215', 'dn': 1, 'sd': 2, 'dt': '2021-02-18', 'co': 'AT', 'is': 'BMSGPK Austria', 'ci': 'urn:uvci:01:AT:10807843F94AEE0EE5093FBC254BD813P'}]});
});

test('Verify common_2DCode_raw_CO10', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHIWK0UM.LMDPK8$BCID:D4+ A%CM8W4.QN5DOW%IRJO/EGPJPC%OQHIZC4.OI1RM8ZA.A53XHMKN4NN3F85QNCY0O%0VZ001HOC9JU0D0HT0HO1PM:K$$09B9LW4T*8+DC%H0PZBITH$*SBAKYE9*FJ $0AZ8-.A2*CEHJ5$0I.AT94K.GDZ2.3TQ+45:DF*4X3M0%0P3ML$0%3PE/9--8-$48$5W1HE70PHN6D7LLK*2HG%89UV-0LZ 2ZJJ4FF85O:3U73SM1IO-O.Z80GHS-O:S9UZ4+FJE 4Y3LL/II 07LPMIH-O9XZQSH9R$FXQGDVBK*RZP3:*DG1W7SGT$7S%RMSG2UQYI9*FGCPAXRQ3E2N+E .1:L7O:7X/5Q+MSA7G6MBYO+JQLHP71RJW63X7VUONC6V35HW6SZ6FT5D75W9AV88E34+V4YC5/HQWOQ5%S4N4N31MRIVWER:7OWMH%VQ87U0FB5RUUQI-FDJ7.OKQ8N12W8FA8/SJ*3KZ6.5G3M22MRKETBGB0-H2FGL*5:%9VKF-.18.Q136BB3Q-FRWU240Q+TS3';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO21', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHMQ8GTPZ%0F%QT%PCIDZEBXZQ8XUJ93.7JJ59MV93WLM*4G76%I9AD65D6 NI4EFSYSC%OD3PUE9DJPG%89-8CNNG.8G%8WA46+8B2P..A3.C9B9JX8IQSXA8IL0HEL$NI Q1610AJ27K2-TII*N8QMU/VEXH:V0/+P%VHSDTO+S  Q.+G650*DKTPI-TU3-Q5PI4$NV-GA+Q/F259ES.C%-BMOKTDC-JEEDQYE9*FJ $0AZ8-.A2*C$GJ3SEZP3/ LGS9I$H5X35Z97 P0V1N P-.PWVHC-J9$B+V9WVHA.PJWHN-PHRI7VHAZJ7UGBL04U2YO9XO9*E6-RI PQVW5/O16%HAT1Z%P.8GM+8:Y001HCY0R%0IGF5JNCPIGSUYI93O89N86UG8KGQN88.R: BRQG84W: BBPIGSU:%F-/C$%2DU2O3J$NNP5S29FAHQ/HLTNP8EFNC3P:HDD8B1MM1M9NTNC30GH.Z8VHL+KLF%CD 810H% 0R%0ZD5CC9T0H$/IAIS%B659EIHCX*D9N2.ZCTBRK7UZD3YDSU N:6EZXT.9NZAVYPFKS2K+U-*IEPRO3F3CVL:O$+1EZ04U5MM7-IU-MC$6IF4KQ3FE2U6*RPCEIIB3006EW*1';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO5', async () => {
  const HC1 = 'HC1:NCFTW2ZY93PO/230NAP%3WT2BZS2HU7ZRZ/9X3LEGK9Y5TZ2G4PO-UY6W8J8G3L7*HJI2AACQ9G-GC*90A10LCEPRRPDH98J98J.BUCDU3 EDMM5FU:+3.ZI48NF0TLARJ16+18XVI3US4RTBBDBCJL.V+-TS8T*I2PILZ+32N2YXA750RAKSOHIWOF52LXEK00TTKE*KLBMXMJ R9K-O.8GURFJQN7:AADHPD0SKRRSHFB1.2LX/1HEC5%1EOA%VVO93O%QI%5GNKQB61BBOGFB*U9FTNPL6CJ1%KXX0A.U:RCPUJ0$P3%R*093.KFCDD.Q968%DPUBSYS8-+MR.1B$RVWV-.VM/JQ249*H76U F49DUT3PLJA+:M98UG8V4HJ9XS. K6LBJ5N19IHX1+SAR.R$UP8:BTOKAXPMXEFI1JG53X8 P6QAOV5WEB5%:7Z*TQ5';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).toBe(undefined);
});

test('Verify common_2DCode_raw_CO17', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHSQCUNP+3J$J1GTNA.Q/R8J2P2FCGJ9%VEQFG4G5*MGQD0ZMIN9HNO4*J8OX4SX42VLFNHZO9HQ1*P13W12XEXO1IQ1R L* 9-V9%OKPJAL9AUC8H*A5:G5B92V4X$75-C5-C:NN:C9VJNEF81JPTGL5-73LT3Z45.I1D7YW8T GG3Q5B9PNPMB4O-O4IJXKTAMP8EF498ZFMA+Q1 NZW02%K:XFEK0WLI+J53J9OUUMK9WLI:IGCIBC:GUC7QHBN83GG3NQN%976FNXEB.FJN83HB3EG3CAJTA3ANBXEBKJ33ZCIATULV:SNS8F-67N%21Q21$4D-I/2DBAJDAJCNB-43NU4TZ8 ZPSR9FX9ON1:PI/E2$4J6AL.+I9UV6$0+BNPHNBC7CTR3$VDY0DUFRLN/Y0Y/K9/I.F0R59.G9/G9F:QQ28R3U:XF2PC0THYZQ4H99$R2-JIS77%F.UINXU: RFTIDG62QEZUIQJAZGA2:UG%UJMI:TU+MM0W5CZ51EC7+2OGMDGW6%MGKJ+$M+:RG9M4WNE.T5BPE8UMZ01YNU:D13HO177XAGDSII6O0OS44FPBTYF*1QXW6A021DJREF/0B4/O6SMB/UVQ2X0M+40PDVK2';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO9', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHSVO+UL4YFV8EVK03SR769X2Q6R5L91+4U*CM8W43DM$7C IE7JM:UC*GPXS4BDL8FFEI9P1J4HGZJKZIKX2M5C9-JEE6AN95SWMAEK7755QLQQ5%YQ+GOBPPN*OGSOLSO5ORLSO21Q.0Q9TQZ+QO0QFHP *P41RLTQ7IRETQ6KQGF6PTM3CQV27D 7:QB.KMIFNV35NC67Q4UYQD*O%+Q.SQBDO4C5V21H6IYIIFGI6IA9G301DEV8IGF5JNCPIGSUYI93O89N86UG8KGQN88.R: BRQG84W: BBPIGSU:%F--8$%2DU2O3J$NNP5SLAFG.CILFFDA6LFCD9KWNHPA%8L+5I9JAX.B-QFDIAS.C4-9NKE$JDVPLW1KD0K8KES/F-1JF.KBX0X/BN31X6GWDT6ZJMWAP2STDRD+D3B4X.3V/J*I5%WKKEURNR9D8Y18B6WYQP34FHDD0SBWIGJ6G0ZU92K1.O/1EX5VH7OSQUWMFF2ID.0X26KS09YCI5G';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO8', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHJQGJ6V7*OJTM2H5CID:D4PQC%CM8W4.QN5DOW%IRJO/EGPJPC%OQHIZC4.OI:OI8ZA80P2W4VZ0K1HVZ0VON*Y0*/GT/A4%4S1LJCAZ95Q75M34VJ53XOA K%KIO4KPK6PK6F$B7$KN+R$FK8+S:RA39K9-UOH2ATP8$JHG4TNOVCTA KK.S-DI.SSW*P*WEZ-S-YNWCK+7B5KDG/BWLG1JAF.7E70*LPRT29+KCFF-+K*LPT68 *L:O87YJ6Y5-N1%%HR%BQO3-WB*T5LU9YQ1NXH$%HT%P$R15Y5*T5AW1OH6*ZUFXFE.R:YN/P3JRH8LHGL2TK96L6SR9MU9DV5 R1JNI:E4I+C7*4M:KCY07LPMIH-O9XZQSH9R$FXQGDVBK*RZP3:*DG1W7SGT$7S%RMSG2UQYI96GGLXK6*K$X4FUTD14//EF.7VKM0$89NT2V457U8+9W2KQ-7LF9-DF07U$B97JJ1D7WKP/HLIJL8JF8JFHJP7NVDEBU1J6+2FCMBSHUKVFLVWREY5G5WAATQWXNTFJ+QD3/V50CJZP25QXH0.VNYYBHAMDVS5+D.MS3$R%1VHXLM2JD3QVU3:D3-MS2ZQ%/KL/04PQ07S6JEHB0UV2JKJ';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO16', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHRUOORLKOQBG0X$4 *M0IIRIMC9BBD26:RI9CGJ9 9CTFOR$S:LC/GPWBILC9FF9YPLYUS8D2%H0AN8%H0%YBRPG.L8$L52J27QAHELWWIDQ2YCIN+IVDC5IACD9C2AKIJKIJM1MQIAY.D-7A4KE0PLV1ARKF.GH5$C4-9GGIUEC0QE5IAALE/69LEEG.CRON+KE/*BG6AKQ5PW68:51JON95N14$BGR-S E1CSQ6U7SSQY%SFEKI.AT94J.9+:IL0H45P/%5/.H/%5R0JX$42:GC5P3*8$-CJ2HW 2K3J./GZJJ4FF85O:3U73SM1IO-O.Z80GHUZ4+FJE 4Y3LL/II 0WB9M729K6QJ2BMA:J0B-S-*O/Y41FD7Y4L4OVIOE1MA.DI1IM.6%8WBMOT1K$7UIB81FD+.KA58QJAXRQ3E2N+E .1:L7N14NIRUQKC.U%KIP3FY5LG1A614I%KZYNNEVQ KB+P8$J1-ST*QGTA4W7.Y7G+SB.V Q5FN93K18HRZX8JVERPLKXV-926/4V%E.W1GOUAEF4HJVCF-0LG2UREF7SFXPT:3QBZFX6F3 3/2NGE7HQU2ITO0B0QS/8URFLEQ71VL%XGVBS:WMLM2D70%31D3';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO20', async () => {
  const HC1 = 'HC1:NCF8%AWY9:$RI40LGE TS1GSRIBBC5BH4P-JK$9H%9X9CIA6Q4F1KPEJLI8C8YJ5/8ZEB:-J64E:75GK0$GAYF5UG5C55M2N568KJFWQ2I/BJ:2*0V+%UX53F4VBQ71GF*6QR0265FR%EM499FWF9RVTRT93R4MSKR1GW LARTT CWLWTEEE+Q9KJVK+M34VF9G9CLD40WP3G97MI8Y-TCFC0BFYT5CGW580D209GHAE9XVHLYD1O1QMD/BKZL2O/29 J8LSMRN9$K2TBU$1PMK5A4Q350LC1I6/H665TDAH.5HI6RS80RSU%AIOFCO$98WM91UY2N8HBTH7EOEZM7ZO0AFR%HQ8TFKCO4Z1HAI900T1E.7NOPU24ED:4175WM4RJC-56LJJC40AP4 XGI70000CV2W+LCTLF.K3IL.ET7UKEL6QGTGMFUTPB G4W0RI5BLA4ACPH5/U68:3DQ7RZJ$$C*2PWY4NVSLXSYJQOIMS-V899*/I9 DRKPP38I.0THKX%22ZC-*3JKO$6HXYRTJU5$D9O3ZVE3+FDREYURI/DY0GPETRNDJ1R0URWM6KNE/$V:.V09KPKU+DU%ARIQBCBSQ16F3VK3C::RR8AB7DL7FZBD85J';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO7', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DH6SC0/8$P9T1GY6B5NL-AH5*SIOOW%IHOT$E08WAWN0%W0AT4V22F/8X*G3M9FQH+4J/-K$+CY73JC3MD3IFTNAJSZ4EJ0NTI4L6-O16VH6ZL4XP:N6ON1 *L:O80R5LY5K%JLY5W0S./RPZ5JT9A/RF H ZP4UBKS5%%H/P5VV3HM4OH6*ZUFXFE.R:YN/P3JRH8LHGL2TK96L6SR9MU9DV5 R1BPIZKH05VW63LD3LS4JYK9EFH78$ZJ*DJ3Q4+Y5V$K2:6.77/Z6KZ5LD6E6P 9SH87/YQJ/RL35+Y5P Q*8D$JD IBCLCK5MJMS68H36DH.K:Z28AL**I3DN3F7MHFEVV%*4HBTSCNT 4C%C47TO*47*KB*KYQTHFTNS4.$S6ZC0JB%JBK:TBSHN36/D1$JU %C$*V$FW%FLS3B1RHR7U4F5T3KCKM%Y87UU%/OY09BVM$/6PSBV/ND$AN03RVANA3-7U%6UEV6WC9V9R5*3V6OJ+L172730LP002';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO23', async () => {
  const HC1 = 'HC1:NCF8%A*-NXP3I407FCNBHNL84F42G12-IGMNEMN21RY.NFVM47F$FR2RGUG04+PJ1U FTL6QK-B EFLYLMP4QYG$HI$K1Q7BV21M5JIX5I*VVGD36PQPPGNH6NRBR98P2V:BMUHVIMJ*FU.ANJDK3A75DY3OLNV$AR.EWQ-VUTKEZOG+DN4SV*LWLLR4BQ:KZ50 V1GN1MI8GZJLMT0BF-U668GM-2D209GHEE9O:H:TDP 47P9W54+A16TLR+9*.SD BRIA 1M:E0AKTADI:T2UIM8HJUA7VLSDAH.5H+4LL10YLVJGP5BEX*16IFFEEK7LUJRBNNFOD/UN7T3EFRDDMOIUYEHTS5CBI*XGR7N9MNPKUIUI UJW.IN82 96UJJXI5620$KI-ROJVG%20HMH0IL7OBR%C3MT.ETP3IV4F*%QY%TFD3IQA2:2Z2JWKDWTGK1JZI6938KP7/*P3G6ZQCGH27V58K2N.QOIMS-V899WZ2F:TKNPR366%0TIJYU0OYRK7GWHS1E6QFUB:VFTD.-S49IJ8J7-RFWMCWJPRJ/6M/EU8AF3DV 9VRKUG:Q97FZOLF-VTSTNYT3FVUP9/Z55-T*9RC/0:/MJUKZ GM2GHOI38J';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).toBe(undefined);
});

test('Verify common_2DCode_raw_CO19', async () => {
  const HC1 = 'HC1:NCF8%AC9Q.P2WS30OULU5C+B0+G361 EE-MV8CQSV7WO157QO47%UNHYPO6B451-$U5.TEN2XXMW%T5WTDYB6LT9 0-G7QNN9UEKV8FG8MD9E.9*GQ*TEE80%BD+8TC%EI$UASE$-7FX6JZVQBTUFVPWSIMCEMJ7%2XM4CM9:15I2TK/K92M76AI:EKQHRXHWNK5YFWZ7+A6-RAVWB 12-+TZZ5J 4+VEP/JT7GHD0ACK44D4*2QAHGQMPXB35H%0J2TMGQQC3ABHM25B3XMLTAOX6$*HU:9$IJ5XHI*BIN4G+K*S9HFB/23.FJ/78J KPDVV65H0MWUN7ZRXDPPZR.$OGHDC12TTK-NRK*2BAD2NGW71DY8V.AJFAPPLV:B0WQUQ4T8LHKCV B8004V50M2M9IV106$4-P8S:I26EL 8.04*ZGY+R+HS+.3TSMZC0IZKSGJ+PHG2BW.I +KZ4GL6G2636V2B/KCF0MH3NRVA8KVE68G23S0-BE9CT TKV13C5NJ+K.JINXA:3GO0KV4OXDW39RDNPF.IEPGPKVOEUP6OS7W7 7SIH15OQDEANFAKQM:FW4WLN3*.R1UBB 008SZNQZZR20O02RX6KRCQ0UF.JUDRR3:CT$I';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO15', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHPYOLYQUJ27936X5+TAM52+GPLWG4G5XQQTT0GJL5810F1KD93B4:ZH6I1$4JF 2K%5+G9F.PNF67J6UW6LEQV46PK9E:00$4*2D$43B+2SEB7:I/2DY73CIBC:GVEBBIBBL7BIB4UNAWNJKBOJJ5PNT53/FJ8FN96B2M3-6BHI73*83ZCIATULV:SNS8F-67N%21Q21$4D-I/2DBAJDAJCNB-437Y4-U2U%TX76SW6B699D9ISU39GEA7IB6$C94JB2E9Z3E8AE-QD+PB.QCD-H/8O3BEQ8L9VN.6A4JBLHLXHQT*QR$M% OP*B9YOB*16CQJN9TW5F/94O5 9E6UEDTUD1VVY95CQ-8EDS9%PP%.P3Y9UM97H98$QJEQF69AKPCPP0%M0YMBXR7+2VCES6VA/G 8R9:O-$E4OL476*RS6SOJSIM0BWZ7P9UIXUBQVKUG6 LE6GTAW8ZFR7FV7T/AN2XT78GB5OVXVGMP/K4 BLCGF0B025AQ37E.8ONG';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO14', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHPWSTXOY2LR$A12EA.Q/R8PJE2FCGJ9%VEQFG4G5*MGQD0ZMIN9HNO4*J8OX4UZ85XP6IAJVMHQ1*P1BT19UERU9:PI$HGYE9*FJ $0AZ8-.A2*CEHJ5$0I.AT94%%2X*2+4QX*2G0EL:DR0JA3LC-DU+8I+CW0MX2JB2PM1JN1INGIZJJ4FF85O:3U73SM1IO-O.Z80GHUZ4+FJE 4Y3LL/II 0SC9+W80PF1YHI$HIMIASQYQ7V34Q3QR$P2OIC0JVLA8J3ET3:H3A+2+33U SAAUOT3TPTO4UBZIC0JKQT.Q6Q+M3+L IMXDRHJUXYOOP6NQQ0THYZQ4H99$R2-JIS77%F.UINXU: RFTIDG62QEZUIQJAZGA2:UG%UJMI:TU+MM0W5CZ5+7VZX8PZL8VASQE02VA5PJJFS*G85C9VV3.BS NU3C/P23YN0TEUDS0+AATS+JG6KRRNJOQV:B3  O%8WMC5SY1T0J7%A6HUWHB::7 76UUQN40HPM71';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO18', async () => {
  const HC1 = 'HC1:NCFOXN%TS3DHRSCI2KHZP: HKWTA.Q/R8J2P2FCGJ9%VEQFG4G5*MGQD0ZMIN9HNO4*J8OX4SX42VLFNHZO9HQ1*P13W12XEXO1IQ1R L* 9-V9%OKPJAL9AUC8H*A5:G5B92V4X$75-C5-C:NN:C9VJNEF81JPTGL5-73LT3Z45.I1D7YW8T GG3Q5B9PNPMB4O-O4IJXKTAMP8EF498ZFMA+Q1 NZW02%K:XFEK0WLI+J53J9OUUMK9WLI:IGCIBC:GUC7QHBN83GG3NQN%976FNXEB.FJN83HB3EG3CAJTA3ANBXEBKJ33ZCIATULV:SNS8F-67N%21Q21$4D-I/2DBAJDAJCNB-43NU4TZ8 ZPSR9FX9ON1:PI/E2$4J6AL.+I9UV6$0+BNPHNBC7CTR3$VDY0DUFRLN/Y0Y/K9/I.F0R59.G9/G9F:QQ28R3U:XF2PC0THYZQ4H99$R2-JIS77%F.UINXU: RFTIDG62QEZUIQJAZGA2:UG%UJMI:TU+MM0W5CZ51EC7+2T8EZM49MM*XRIZA7SB21WNTBUDU9DSPJN64BHJ19FP+*FBIE0FJWRQH:1.0832OSXV3YO/YAD14G/B4+PEMV%M5C2BTNL-$LXJPFRP%FVUMPKTJ';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO22', async () => {
  const HC1 = 'HC1:NCFOXNXTSQDICA7A18 92F39MT6+0QN.E/:JTNL%I6%%5OGIDCJ 2B:X9WECV$IKQCAQCCV4*XUA2P9FH.+HTNI.RIWVHWVH+ZE1YHI$HXF8/+H7XH8ZL$:PIMI%LHL OLLG5$0JCAEV4R83/70K%4E+4 $4LHF1 C0QV:A3CD1QKJ283A5QXJP/HL%E1CA0IB8/Y4M/S KL+X4OIFGG15JL-V4-NSB+PV%N/Q8:WO$*SDAK$NI4L6-O16VH6ZL4XP0N6K5TBC7+6BIHJLD3OF7-UJ:AJ0H3VBJMOJ423NF7ITNZIJZ735NJN33VLJJ%4D+2 E7D%0M.0*K5$/IL4JJZCM*4CZKHKB-43.E3KD3OAJA70:ZH/O1:O1AT1NQ1 WUQRENS431TN$IK.G47HB%0WT072HFHN/SNP.0FVV/SN7Y431TCRV$.PTW5CL52U50$EZ*N4IUJCKCPACPI2YUFJ6LX3+KG% BTVB3UQFJ6GL28LHXOAYJAUVPQRHIY1VS1NQ1PRAAUICO10W5JEOVNCWKS%J3+$8T1V1EFYSVCOVOCNI0A73C1NT%FR/VPKI1YW3.D3T6WFVQJMI P8T0KNMDI%MTIUZ:BEF3D/A59I%$6L7UKNM4USC.S$$F5 FI*262J';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).toBe(undefined);
});

test('Verify common_2DCode_raw_CO6', async () => {
  const HC1 = 'HC1:NCFTW2/-N3POWP3GNAA/DQRN+24V1P-HVRP9WZD4554$QIWIZCHC43Z198KG: KHITDSGEBA7I0GNQCO0+HJW9EM-6%IPD/6VZSBEW:FNC-SG$SW-5C1A2WTSQHK1UWORZA2V.VR8QE*EZ3TW5E+:NIZUJ$9AUPFW6MRE%X3JSDFAQET4I57V-6/WN.4TW00830US826M882SMMCG4P89/-9P/3V14N%7W82H73O410/94/MKUS4KL$10F*Q:KG1KG6954+ODDK+A69S5UT5 F42ZN/WHDV4IQ47KNSZG6602FSV9GN+BH.AP$8DB91MML%ADNJ$MBUIL+:4FUIVXKQBHSN16QK955MFDWB7$T7NT9WZ7:WL:ZAW-2*QIAL724R.1I/OU*MD6E7.9EUMB6:LF2N.6S%FDH978 9JFTC8FRRI.L53%0I 5JGPD+EJ+6/14388DV2 U8.U5%7GRHKZFN-DO/BR49ME6PR*IP-UL*2+BOJ-HX*1MFV2FK.M7I4DKXOO7H8MB PQ%KQ*.DDRA4NU++UQKVJRF$%3QF6K6KL9TFXMGQG';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_CO13', async () => {
  const HC1 = 'HC1:NCFTW20088D06R3.VN5417HL1ZLCI40-QAUN./EIS6$7R8LHS:SDVV:CF/7U3VM7LPE/4-P6 B8ASA+N25GBID2N-5/G3LO0*727U0OFG.SEJOI5:35:3O16$OU92MG5C/XDR2V-OV8OQOD2WLAKH3**3//0 /0G.0-8G:H9CKCW5J. 9L.TD424I6BBLNL2JE3C40Z80QO0W85M22PC2AE0Z58FAN+2N$52K24EIHDJQG5213S8BQPOM7B6JA36$LUYCOG4WFH5:2Z7FLRCS5BLHHIX88EBB5IIHH-O9%JCCW3OOO0$PX134ZLV%TO-HOOAXJE+CKG*COJMVHAVN7%UJ9X8MO0IE0I336263WH *EN8F2.IVIBDNAXXS4F0SHAFXU14RO0I3PUDJD%A72DVJNDP2MNGCR*NA433UTYNLEVANKOZEJDOTOML6BPJ3RLTKY97FD1Z016RE:Q2%R4ZCWSVD1FEO%HQHDE9N+4WV9VH0CXM0D:ET$0M4S%:DW+V5ESWK117K 9MYVQ FQMOP73GPDRQ.IACPXHK1AVM-THDB5:F6%J/6P:4W$F1FCG';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

test('Verify common_2DCode_raw_Z1', async () => {
  const HC1 = 'HC1:82W2BPU509TNV6GLTJUGEQ3U5BPPPD0FROK9*UKD9N39LDYBA1OX4M64DR3K:FWNFCE0DU$ULHS%/K1KKK8S-4G:VA2NC* APAQELMHJGACOE0JFE41*0VEQRQ8SJ1ICMBCB69PWD9KG1DHHBR7.%UB2L3*N/IL.VR9SS-4MSKB*.ULHFWLD/LLL0K03R7UM.33DD7Q:GN3M-1VUJ4QRA.+P%.9N.CC40UE6374YJI R7D9RHB9L9R65B*DHOPVUH64T5BDENRU496553%HHKV4LZIPCC$84NS7NZUPU9 MMZJMF2PUYSDDI %KB61QG1ICAOE0SBKDS201O2WMA58H/83U8839FUKJ2O$HFJD4X8HTIPUS8LDKLR4V50CC0H:M$0K%PMU2POH4.ER5%E*2KO*PS$Q 31502S+GC6IM086P2L1AHP9W.N03MB3V.1S$UU7R6TST$ T0/1%-7LIOI/6F+0K/4OS0%U3I89DFKOFT/AMY9ESFHFNND47:RI/4DZ2L$RD%PKDKOE25XOKXMFTOK7S6E.5.IL-220H7-XJKIO FH/23.UO9Z7EY2U2';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).toBe(undefined);
});

test('Verify common_2DCode_raw_CO12', async () => {
  const HC1 = 'HC1:NCF8%AB8OV%RI40XFEYUS/.BK 16K97/U3-FRQ9LWN-JA3ADQKHCZ7D75JTQI%NLAU$6EC7S4FV.WJ/+24UN7O2MKSK1U7Q8:1L8PTTGAZ.4AWEZETGX05N9KR0T:DO9K8YPRYUO:4I370HT$OUJN3Q K20S2WMD$75W1SU5/3WP4HK0J0ZRV-8LIR3*0AMDCT8ZBVWRJ5N0FP5FTA154 DPTM3XHH%FPS*NDFWS 0CFHH.I0VT$DO8JPJQKA811S68MFK8L:PJ1EKPW97TDULPV65T*3I5N7I4U854RL1X0OWGNVEKAD/23H55X81MD50 N0IF8/MJGRDX9MD86VD:BCNT98I1T41-YCY73RJOKV23V2V9F9DN%-SO3DF:44O5VL2QIAGY6GFBC40FXK XGI700004V2+TM3K322T*UFXTF/XO.IJLKUIZNROJ:2VGAINR83O2Z 4-I6ER99NR.VMMICJRIIU22XUG17$6VD$3T$8H/4QMELQPS4HP%09JO8BKH 5HD0V:A+BW9LVZSG6SD4:6I3D9/JI5UXFWD1RVI95NN1W8K3WW1Q*CSO/O6DU9:H7YVR*R2 1:26XGCNAET-F576.W2S4FMZQ.5FJZPF8OB16740OSRG1';
  const cwtPayload = await unpackAndVerify(HC1);
  expect(cwtPayload).not.toBe(null);
  expect(cwtPayload).not.toBe(undefined);
});

