import { MutationHookOptions, useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations/user";

export const useCreateUser = (
    options: MutationHookOptions<{ createUser: any }> = {}
) => {
    const [call, fromCreate] = useMutation(CREATE_USER, options);

    return {
        ...fromCreate,
        call: (createUserInput: any) => call({ variables: { createUserInput } })
    }
}