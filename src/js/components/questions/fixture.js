const questionArray = [
  {
    id: 1,
    title: 'araali2',
    qstnbody: 'This is the 2nd sample question',
    tags: ['#redux', '#NodeJS', '#Express', '#Firebase'],
    createdAt: '2020-01-10T18:09:10.720Z',
    updatedAt: '2020-01-10T18:09:10.720Z',
    userId: 1,
    answers: [
      {
        id: 1,
        answer: 'This is a sample answer',
        votes: 0,
        status: false,
        createdAt: '2020-01-11T16:19:56.097Z',
        updatedAt: '2020-01-11T16:19:56.097Z',
        userId: 1,
        questionId: 1
      },
      {
        id: 2,
        answer: 'This is the 2nd sample answer',
        votes: 0,
        status: false,
        createdAt: '2020-01-13T08:45:24.572Z',
        updatedAt: '2020-01-13T08:45:24.572Z',
        userId: 1,
        questionId: 1
      }
    ],
    author: {
      id: 1,
      username: 'araali'
    }
  },
  {
    id: 2,
    title: 'araali32ss',
    qstnbody: 'This is the 3rd sample question',
    tags: ['#redux', '#NodeJS', '#Express', '#Firebase'],
    createdAt: '2020-01-13T08:35:33.186Z',
    updatedAt: '2020-01-13T08:35:33.186Z',
    userId: 1,
    answers: [
      {
        id: 3,
        answer: 'This is the sample answer',
        votes: 0,
        status: false,
        createdAt: '2020-01-13T08:46:07.820Z',
        updatedAt: '2020-01-13T08:46:07.820Z',
        userId: 1,
        questionId: 2
      }
    ],
    author: {
      id: 1,
      username: 'araali'
    }
  }
];

export default questionArray;
