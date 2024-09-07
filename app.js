import CloakStealth from "cloak-stealth";

async function main() {
  const CloakStealthManager = new CloakStealth({
    apiKey: "lsk_3159f14d244956df9c1af13522bd6efad9960981f1c02402",
    windowOptions: { cols: 1, rows: 1 },
    clearCacheAndHistory: true,
    turnstile: true,
    advancedStealthMode: false,
  });

  const newProfileId = await CloakStealthManager.create({
    name: "test",
    os: "mac", // 'win', 'lin', 'android' , 'mac'
    audioContext: "off",
    canvas: "off",
    webGL: "off",
    clientRects: "off",
    // proxy: {
    //   mode: "http",
    //   host: "45.127.248.127",
    //   port: "5128",
    //   username: "rpsvaoyk",
    //   password: "vbqcg1han4bb",
    // },
  });

  const customAutomation = async ({ browser, page, GL, profileId, delay }) => {
    await page.goto("https://gleam.io/", {
      waitUntil: "domcontentloaded",
    });

    await delay(15000);

    await page.goto("https://www.browserscan.net/bot-detection", {
      waitUntil: "domcontentloaded",
    });

    await delay(10000);

    await page.goto("https://iphey.com/", {
      waitUntil: "domcontentloaded",
    });
    await delay(7000);

    await page.goto(
      "https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test",
      {
        waitUntil: "domcontentloaded",
      }
    );
    await delay(7000);

    await page.goto("https://antcpt.com/score_detector/", {
      waitUntil: "domcontentloaded",
    });
  };

  // // 2. Run 1 profile
  await CloakStealthManager.start(
    { profileId: newProfileId, order: 1, autoClose: true },
    customAutomation
  );

  // 3. Get App Profiles
  // const listProf = await CloakStealthManager.getAllProfiles();

  // 4. Run All profile (tuần tự)
  // await CloakStealthManager.runAllProfiles(customAutomation, {
  //   threads: 1, // Chạy 5 profile cùng lúc
  //   startIndex: 0, // Bắt đầu từ profile thứ 11
  //   endIndex: 50, // Kết thúc ở profile thứ 50
  //   autoClose: false,
  //   delay: 5000,
  // });
}
main().catch(console.error);
