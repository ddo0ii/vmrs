export const DataTreeData = [
  {
    id: '1',
    label: 'CSV_SAMPLE',
    children: [
      {
        id: '1-1',
        label: 'INFORMATION_SCHEMA',
        children: [
          {
            id: '1-1-1',
            label: 'Views',
            children: [
              { id: '1-1-1-1', label: 'APPLICABLE_ROLES' },
              { id: '1-1-1-2', label: 'CLASSES' },
              { id: '1-1-1-3', label: 'CLASS_INSTANCES' },
              { id: '1-1-1-4', label: 'CLASS_INSTANCE_FUNCTIONS' },
              { id: '1-1-1-5', label: 'COLUMNS' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'SAMPLE_DB',
    children: [
      {
        id: '2-1',
        label: 'INFORMATION_SCHEMA',
        children: [
          {
            id: '2-1-1',
            label: 'Views',
            children: [
              { id: '2-1-1-1', label: 'APPLICABLE_ROLES' },
              { id: '2-1-1-2', label: 'CLASSES' },
              { id: '2-1-1-3', label: 'CLASS_INSTANCES' },
              { id: '2-1-1-4', label: 'CLASS_INSTANCE_FUNCTIONS' },
              { id: '2-1-1-5', label: 'COLUMNS' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'PUBLIC',
    children: [
      {
        id: '3-1',
        label: 'Tables',
        children: [{ id: '3-1-1', label: 'SAMPLE_TABLE' }],
      },
    ],
  },
  {
    id: '4',
    label: 'SNOWFLAKE',
    children: [
      { id: '4-1', label: 'ACCOUNT_USAGE' },
      { id: '4-2', label: 'ALERT' },
      { id: '4-3', label: 'BCR_ROLLOUT' },
      { id: '4-4', label: 'CORE' },
      { id: '4-5', label: 'DATA_PRIVACY' },
    ],
  },
];
