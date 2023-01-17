import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Account} from '../../helpers/interfaces';
const initialState = {
  isLoaded: false,
  selectedAccount: null as number | null,
  accounts: [] as Account[],
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    accountAdded(state, action: PayloadAction<Account>) {
      const account = action.payload;
      console.log(account);
      state.accounts.push(account);
    },
    accountsLoaded(state, action: PayloadAction<Account[]>) {
      state.accounts = action.payload;
      console.log(action.payload);
      state.selectedAccount = (action.payload as unknown as Account[])[0].id;
      state.isLoaded = true;
    },
    accountSelected(state, action: PayloadAction<number>) {
      state.selectedAccount = action.payload;
    },
  },
});

export const {accountAdded, accountsLoaded, accountSelected} =
  accountsSlice.actions;

export default accountsSlice.reducer;
