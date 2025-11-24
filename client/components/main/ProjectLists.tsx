import { FocusCards } from '../ui/focus-cards';

const ProjectLists = () => {
  const cards = [
    {
      id: 0,
      title: 'Summaire AI ',
      githubLink: 'https://github.com/farazz23/Summarie-Freelance',
      src: '/project/summ.png',
      live: 'https://summarie-freelance.vercel.app/',
    },
    {
      id: 1,
      title: 'Buy Fresh',
      src: '/project/bf.png',
      githubLink:
        'https://github.com/farazz23/MERNStack--BuyFresh-E_commerce_Website',
      live: 'https://buyfresh.netlify.app/',
    },
    {
      id: 2,
      title: 'Hike Chat Application',
      src: '/project/hike.png',
      githubLink: 'https://github.com/farazz23/Hike-Chat-Application',
      live: 'https://hike-chat-application-edi9.onrender.com/',
    },
    {
      id: 3,
      title: 'Movie Galaxy',
      src: '/project/mg.png',
      githubLink:
        'https://github.com/farazz23/MovieWayGalaxy---Movie-Information-Web-App',
      live: 'https://moviewaygalaxy.netlify.app/',
    },
    {
      id: 4,
      title: 'Password Generator',
      src: '/project/pg.png',
      githubLink: 'https://github.com/farazz23/Password-Generator',
      live: 'https://tbndpasswordgenerator.netlify.app/',
    },
  ];

  // const cards = [
  //   {
  //     id: 0,
  //     title: 'Summaire AI ',
  //     src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     title: 'Valley of life',
  //     src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     title: 'Sala behta hi jayega',
  //     src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     title: 'Camping is for pros',
  //     src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     title: 'The road not taken',
  //     src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     title: 'The First Rule',
  //     src: 'https://assets.aceternity.com/the-first-rule.png',
  //   },
  // ];
  return (
    <div>
      <FocusCards cards={cards} />
    </div>
  );
};

export default ProjectLists;
