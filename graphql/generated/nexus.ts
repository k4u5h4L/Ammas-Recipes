/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Ingredient: { // root type
    item?: string | null; // String
    quantity?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Recipe: { // root type
    cook?: string | null; // String
    cuisine?: string | null; // String
    imgSrc?: string | null; // String
    ingredients?: Array<NexusGenRootTypes['Ingredient'] | null> | null; // [Ingredient]
    method?: Array<string | null> | null; // [String]
    name?: string | null; // String
    reviews?: Array<NexusGenRootTypes['Review'] | null> | null; // [Review]
    tags?: Array<string | null> | null; // [String]
  }
  Review: { // root type
    author?: string | null; // String
    date?: string | null; // String
    desc?: string | null; // String
    rating?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Ingredient: { // field return type
    item: string | null; // String
    quantity: string | null; // String
  }
  Mutation: { // field return type
    createRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
  }
  Query: { // field return type
    GetLatestRecipes: Array<NexusGenRootTypes['Recipe'] | null> | null; // [Recipe]
    SearchRecipe: Array<NexusGenRootTypes['Recipe'] | null> | null; // [Recipe]
  }
  Recipe: { // field return type
    cook: string | null; // String
    cuisine: string | null; // String
    imgSrc: string | null; // String
    ingredients: Array<NexusGenRootTypes['Ingredient'] | null> | null; // [Ingredient]
    method: Array<string | null> | null; // [String]
    name: string | null; // String
    reviews: Array<NexusGenRootTypes['Review'] | null> | null; // [Review]
    tags: Array<string | null> | null; // [String]
  }
  Review: { // field return type
    author: string | null; // String
    date: string | null; // String
    desc: string | null; // String
    rating: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  Ingredient: { // field return type name
    item: 'String'
    quantity: 'String'
  }
  Mutation: { // field return type name
    createRecipe: 'Recipe'
  }
  Query: { // field return type name
    GetLatestRecipes: 'Recipe'
    SearchRecipe: 'Recipe'
  }
  Recipe: { // field return type name
    cook: 'String'
    cuisine: 'String'
    imgSrc: 'String'
    ingredients: 'Ingredient'
    method: 'String'
    name: 'String'
    reviews: 'Review'
    tags: 'String'
  }
  Review: { // field return type name
    author: 'String'
    date: 'String'
    desc: 'String'
    rating: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createRecipe: { // args
      data: string; // String!
    }
  }
  Query: {
    GetLatestRecipes: { // args
      num?: number | null; // Int
      start?: number | null; // Int
    }
    SearchRecipe: { // args
      num?: number | null; // Int
      query?: string | null; // String
      start?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}