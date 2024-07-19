import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DemoState {
  counter: number;
  users: Record<string, User>;
  userIds: string[];
}

const initialState = {
  counter: 0,
  users: {},
  userIds: [],
} satisfies DemoState as DemoState;

const demoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    fetchUsersSuccess(state, { payload: users }: PayloadAction<User[]>) {
      state.users = users.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
      state.userIds = users.map(({ id }) => id);
    },
    incrementUser(state, { payload: userId }) {
      state.users[userId].userCounter++;
    },
  },
});

export const { increment, fetchUsersSuccess, incrementUser } =
  demoSlice.actions;
export default demoSlice.reducer;
