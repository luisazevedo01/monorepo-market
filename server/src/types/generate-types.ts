import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

const factory = new GraphQLDefinitionsFactory();
factory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/types/graphql.ts'),
    outputAs: 'class',
    watch: true
})