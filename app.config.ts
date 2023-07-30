export default defineAppConfig({
  docus: {
    title: 'ヱメドットクリック! ドキュメント',
    description: 'さあ新たなコミュニティーに参加しよう!',
    url: 'https://docs.misskey.emesan.click',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'https://github.com/emesan22/docs.misskey.emesan.click'
    },
    github: {
      dir: 'content',
      branch: 'master',
      repo: 'docs.misskey.emesan.click',
      owner: 'emesan22',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      title: "ヱメドットクリック!\nDocs",
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
