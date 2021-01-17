function importStoryboards() {
  let storyboards = [];
  const folders = [
    {
      storyboard: {
        context: require.context('../../../public/images/s_sd_sub', false, /\.(png)$/),
        folderName: 's_sd_sub'
      },
      design: {
        context: require.context('../../../public/images/s_sd_sub/design', false, /\.(png)$/),
        folderName: 's_sd_sub/design'
      }
    },
    {
      storyboard: {
        context: require.context('../../../public/images/s_frog_sub', false, /\.(png)$/),
        folderName: 's_frog_sub'
      },
      design: {
        context: require.context('../../../public/images/s_frog_sub/design', false, /\.(png)$/),
        folderName: 's_frog_sub/design'
      }
    },
    {
      storyboard: {
        context: require.context('../../../public/images/home', false, /\.(PNG)$/),
        folderName: 'home'
      },
      design: null
    },
  ];
  
  const text = [
    {
      title: "A Highly Charged Battle",
      description: "A young determined gamer is fighting against her toughest oppenent yet - a fighting-game master, her older sister Rizza. The loser has to take vacuum duty for a month!"
    },
    {
      title: "A Fruitful Performance",
      description: "Tootie is nervously performing at his trumpet recital, when an audience member in the crowd decides he's had enough of listening to this mess of a performer."
    },
    {
      title: "Home",
      description: "A personal comic I made after returning to my home for Thanksgiving. My freshman year of college made me realize and explore the idea of what I consider home and what it meant to others."
    }
  ]
  
  folders.forEach((folder, index) => {
    let images = [];
    folder.storyboard.context.keys().forEach((item) => {
      images.push(window.location.origin.concat('/images/').concat(folder.storyboard.folderName).concat(item.replace('.', '')))
    });

    let designs = [];
    if (folder.design != null) {
      folder.design.context.keys().forEach((item) => {
        designs.push(window.location.origin.concat('/images/').concat(folder.design.folderName).concat(item.replace('.', '')))
      });
    }

    storyboards.push({
      text: text[index],
      images: images,
      designs: designs
    });
  });

  return storyboards;
}

export {
  importStoryboards
}