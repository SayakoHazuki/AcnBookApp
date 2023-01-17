export default async function loadAccounts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Checking',
          balance: 1000,
        },
        {
          id: 2,
          name: 'Savings',
          balance: 2000,
        },
      ]);
    }, 2500);
  });
}
