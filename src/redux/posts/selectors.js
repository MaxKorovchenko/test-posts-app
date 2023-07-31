export const selectItems = (state) => state.posts.items;

export const selectPost = (state) => state.posts.post;

export const selectIsLoading = (state) => state.posts.isLoading;

export const selectError = (state) => state.posts.error;
