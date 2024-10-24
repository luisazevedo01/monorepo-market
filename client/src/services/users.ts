import { MutationHookOptions, QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations/user";
import { FETCH_USERS } from "../graphql/queries/user";

export const useCreateUser = (
    options: MutationHookOptions<{ createUser: any }> = {}
) => {
    const [call, fromCreate] = useMutation(CREATE_USER, options);

    return {
        ...fromCreate,
        call: (createUserInput: any) => call({ variables: { createUserInput } })
    }
}

export const useFetchUsers = (
    options: QueryHookOptions = {}
) => (
    useQuery(FETCH_USERS, {
        ...options
    })
)