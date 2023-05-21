import { rqMutate } from "src/libs/react-query";

// export const queryFetchAuthenticators = ({ params = {}, ...config } = {}) => ({
//     queryKey: ['/authenticators', params],
//     ...config,
//   });

export const queryRegister = ({ ...config } = {}) => ({
  mutationFn: (data) =>
    rqMutate({
      queryKeys: [["/auth/register"]],
      method: "post",
      url: "/auth/register",
      data,
    }),
  mutationKey: ["/auth/register"],
  ...config,
});

export const queryLogin = ({ ...config } = {}) => ({
  mutationFn: (data) =>
    rqMutate({
      queryKeys: [["/auth/login"]],
      method: "post",
      url: "/auth/login",
      data,
    }),
  mutationKey: ["/auth/login"],
  ...config,
});
