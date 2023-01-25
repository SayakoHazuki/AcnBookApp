import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Account, SAccounts} from '../../helpers/interfaces';

export const ACCOUNT = 'account';

const initialState = {
  selectedAccountId: null as number | null,
  accounts: [{id: 0, name: 'Wallet', balance: 0}] as Account[],
} as SAccounts;

const accountSlice = createSlice({
  name: ACCOUNT,
  initialState,
  reducers: {
    accountAdded(state, action: PayloadAction<Account>) {
      const account = action.payload;
      console.log(account);
      state.accounts.push(account);
    },
    accountSelected(state, action: PayloadAction<number>) {
      state.selectedAccountId = action.payload;
    },
  },
});

export const {accountAdded, accountSelected} = accountSlice.actions;

export default accountSlice.reducer;
