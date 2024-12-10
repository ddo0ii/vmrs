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
              { id: '1-1-1-3', label: 'COLUMNS' },
              { id: '1-1-1-4', label: 'TABLE_CONSTRAINTS' },
            ],
          },
          {
            id: '1-1-2',
            label: 'Tables',
            children: [
              { id: '1-1-2-1', label: 'USER_TABLE' },
              { id: '1-1-2-2', label: 'LOG_TABLE' },
            ],
          },
        ],
      },
      {
        id: '1-2',
        label: 'PUBLIC',
        children: [
          {
            id: '1-2-1',
            label: 'Tables',
            children: [
              { id: '1-2-1-1', label: 'EMPLOYEE' },
              { id: '1-2-1-2', label: 'DEPARTMENT' },
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
        label: 'PUBLIC',
        children: [
          {
            id: '2-1-1',
            label: 'Tables',
            children: [
              { id: '2-1-1-1', label: 'SALES' },
              { id: '2-1-1-2', label: 'CUSTOMERS' },
            ],
          },
          {
            id: '2-1-2',
            label: 'Views',
            children: [
              { id: '2-1-2-1', label: 'SALES_SUMMARY' },
              { id: '2-1-2-2', label: 'CUSTOMER_DETAILS' },
            ],
          },
        ],
      },
      {
        id: '2-2',
        label: 'INFORMATION_SCHEMA',
        children: [
          {
            id: '2-2-1',
            label: 'Functions',
            children: [
              { id: '2-2-1-1', label: 'CALCULATE_TAX' },
              { id: '2-2-1-2', label: 'GENERATE_REPORT' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'SNOWFLAKE',
    children: [
      {
        id: '3-1',
        label: 'ACCOUNT_USAGE',
        children: [
          {
            id: '3-1-1',
            label: 'Views',
            children: [
              { id: '3-1-1-1', label: 'QUERY_HISTORY' },
              { id: '3-1-1-2', label: 'STORAGE_USAGE' },
            ],
          },
        ],
      },
      {
        id: '3-2',
        label: 'DATA_SHARING',
        children: [
          {
            id: '3-2-1',
            label: 'Shared Tables',
            children: [
              { id: '3-2-1-1', label: 'SHARED_SALES' },
              { id: '3-2-1-2', label: 'SHARED_INVENTORY' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '4',
    label: 'TASTY_BYTES_SAMPLE_DATA',
    children: [
      {
        id: '4-1',
        label: 'PUBLIC',
        children: [
          {
            id: '4-1-1',
            label: 'Tables',
            children: [
              { id: '4-1-1-1', label: 'RECIPES' },
              { id: '4-1-1-2', label: 'INGREDIENTS' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5',
    label: 'NEW_DATABASE',
    children: [
      {
        id: '5-1',
        label: 'PUBLIC',
        children: [
          {
            id: '5-1-1',
            label: 'Tables',
            children: [
              { id: '5-1-1-1', label: 'TEST_TABLE_1' },
              { id: '5-1-1-2', label: 'TEST_TABLE_2' },
            ],
          },
        ],
      },
    ],
  },
];
