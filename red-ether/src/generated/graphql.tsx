import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** JSON String */
  JSONString: any;
};

export type Query = {
   __typename?: 'Query';
  /** The ID of the object */
  node?: Maybe<Node>;
  information?: Maybe<InformationCountableConnection>;
  systems?: Maybe<SystemCountableConnection>;
  species?: Maybe<SpeciesCountableConnection>;
  key?: Maybe<KeyCountableConnection>;
  textKeys?: Maybe<TextKeyValueCountableConnection>;
  numberKeys?: Maybe<NumberKeyValueCountableConnection>;
  reactions?: Maybe<ReactionCountableConnection>;
  reactionSystems?: Maybe<ReactionSystemCountableConnection>;
  publications?: Maybe<PublicationCountableConnection>;
  logs?: Maybe<LogCountableConnection>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryInformationArgs = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySystemsArgs = {
  calculator?: Maybe<Scalars['String']>;
  calculatorParameters?: Maybe<Scalars['String']>;
  cell?: Maybe<Scalars['Float']>;
  charge?: Maybe<Scalars['Float']>;
  charges?: Maybe<Scalars['Float']>;
  constraints?: Maybe<Scalars['Float']>;
  ctime?: Maybe<Scalars['Float']>;
  data?: Maybe<Scalars['String']>;
  dipole?: Maybe<Scalars['Float']>;
  energy?: Maybe<Scalars['Float']>;
  fmax?: Maybe<Scalars['Float']>;
  forces?: Maybe<Scalars['Float']>;
  freeEnergy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  initialCharges?: Maybe<Scalars['Float']>;
  initialMagmoms?: Maybe<Scalars['Float']>;
  keyValuePairs?: Maybe<Scalars['String']>;
  magmom?: Maybe<Scalars['Float']>;
  magmoms?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  masses?: Maybe<Scalars['Float']>;
  momenta?: Maybe<Scalars['Float']>;
  mtime?: Maybe<Scalars['Float']>;
  natoms?: Maybe<Scalars['Int']>;
  numbers?: Maybe<Scalars['Int']>;
  pbc?: Maybe<Scalars['Int']>;
  positions?: Maybe<Scalars['Float']>;
  smax?: Maybe<Scalars['Float']>;
  stress?: Maybe<Scalars['Float']>;
  tags?: Maybe<Scalars['Float']>;
  uniqueId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySpeciesArgs = {
  id?: Maybe<Scalars['Int']>;
  n?: Maybe<Scalars['Int']>;
  z?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyArgs = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTextKeysArgs = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNumberKeysArgs = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReactionsArgs = {
  activationEnergy?: Maybe<Scalars['Float']>;
  chemicalComposition?: Maybe<Scalars['String']>;
  coverages?: Maybe<Scalars['String']>;
  dftCode?: Maybe<Scalars['String']>;
  dftFunctional?: Maybe<Scalars['String']>;
  facet?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  products?: Maybe<Scalars['String']>;
  pubId?: Maybe<Scalars['String']>;
  reactants?: Maybe<Scalars['String']>;
  reactionEnergy?: Maybe<Scalars['Float']>;
  sites?: Maybe<Scalars['String']>;
  surfaceComposition?: Maybe<Scalars['String']>;
  textsearch?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReactionSystemsArgs = {
  aseId?: Maybe<Scalars['String']>;
  energyCorrection?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPublicationsArgs = {
  authors?: Maybe<Scalars['String']>;
  doi?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  journal?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  pubId?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  pubtextsearch?: Maybe<Scalars['String']>;
  stime?: Maybe<Scalars['Float']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryLogsArgs = {
  aseId?: Maybe<Scalars['String']>;
  logfile?: Maybe<Scalars['String']>;
  distinct?: Maybe<Scalars['Boolean']>;
  op?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  jsonkey?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type InformationCountableConnection = {
   __typename?: 'InformationCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<InformationCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type InformationCountableEdge = {
   __typename?: 'InformationCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<Information>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Information = Node & {
   __typename?: 'Information';
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type SystemCountableConnection = {
   __typename?: 'SystemCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<SystemCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SystemCountableEdge = {
   __typename?: 'SystemCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<System>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type System = Node & {
   __typename?: 'System';
  /** The ID of the object. */
  id: Scalars['ID'];
  uniqueId?: Maybe<Scalars['String']>;
  ctime?: Maybe<Scalars['Float']>;
  mtime?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  numbers?: Maybe<Scalars['JSONString']>;
  positions?: Maybe<Scalars['JSONString']>;
  cell?: Maybe<Scalars['JSONString']>;
  pbc?: Maybe<Scalars['Int']>;
  initialMagmoms?: Maybe<Scalars['JSONString']>;
  initialCharges?: Maybe<Scalars['JSONString']>;
  masses?: Maybe<Scalars['JSONString']>;
  tags?: Maybe<Scalars['JSONString']>;
  momenta?: Maybe<Scalars['JSONString']>;
  constraints?: Maybe<Scalars['JSONString']>;
  calculator?: Maybe<Scalars['String']>;
  calculatorParameters?: Maybe<Scalars['String']>;
  energy?: Maybe<Scalars['Float']>;
  freeEnergy?: Maybe<Scalars['Float']>;
  forces?: Maybe<Scalars['JSONString']>;
  stress?: Maybe<Scalars['JSONString']>;
  dipole?: Maybe<Scalars['JSONString']>;
  magmoms?: Maybe<Scalars['JSONString']>;
  magmom?: Maybe<Scalars['Float']>;
  charges?: Maybe<Scalars['JSONString']>;
  keyValuePairs?: Maybe<Scalars['JSONString']>;
  data?: Maybe<Scalars['JSONString']>;
  natoms?: Maybe<Scalars['Int']>;
  fmax?: Maybe<Scalars['Float']>;
  smax?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  mass?: Maybe<Scalars['Float']>;
  charge?: Maybe<Scalars['Float']>;
  Cifdata?: Maybe<Scalars['String']>;
  Reaction?: Maybe<Scalars['String']>;
  Facet?: Maybe<Scalars['String']>;
  Trajdata?: Maybe<Scalars['String']>;
  Mtime?: Maybe<Scalars['String']>;
  Ctime?: Maybe<Scalars['String']>;
  Substrate?: Maybe<Scalars['String']>;
  DftCode?: Maybe<Scalars['String']>;
  Adsorbate?: Maybe<Scalars['String']>;
  Pbc?: Maybe<Scalars['String']>;
  DftFunctional?: Maybe<Scalars['String']>;
  Formula?: Maybe<Scalars['String']>;
  Username?: Maybe<Scalars['String']>;
  keys?: Maybe<KeyCountableConnection>;
  species?: Maybe<SpeciesCountableConnection>;
  textKeys?: Maybe<TextKeyValueCountableConnection>;
  numberKeys?: Maybe<NumberKeyValueCountableConnection>;
  reactionSystems?: Maybe<ReactionSystemCountableConnection>;
  log?: Maybe<Array<Maybe<Log>>>;
  publication?: Maybe<Array<Maybe<Publication>>>;
  reactions?: Maybe<ReactionCountableConnection>;
  InputFile?: Maybe<Scalars['String']>;
};


export type SystemKeysArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SystemSpeciesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SystemTextKeysArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SystemNumberKeysArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SystemReactionSystemsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SystemReactionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SystemInputFileArgs = {
  format?: Maybe<Scalars['String']>;
};


export type KeyCountableConnection = {
   __typename?: 'KeyCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<KeyCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type KeyCountableEdge = {
   __typename?: 'KeyCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<Key>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Key = Node & {
   __typename?: 'Key';
  /** The ID of the object. */
  id: Scalars['ID'];
  key: Scalars['String'];
  systems?: Maybe<System>;
};

export type SpeciesCountableConnection = {
   __typename?: 'SpeciesCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<SpeciesCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SpeciesCountableEdge = {
   __typename?: 'SpeciesCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Species = Node & {
   __typename?: 'Species';
  /** The ID of the object. */
  id: Scalars['ID'];
  z: Scalars['ID'];
  n: Scalars['ID'];
  systems?: Maybe<System>;
};

export type TextKeyValueCountableConnection = {
   __typename?: 'TextKeyValueCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TextKeyValueCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TextKeyValueCountableEdge = {
   __typename?: 'TextKeyValueCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<TextKeyValue>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TextKeyValue = Node & {
   __typename?: 'TextKeyValue';
  /** The ID of the object. */
  id: Scalars['ID'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  systems?: Maybe<System>;
};

export type NumberKeyValueCountableConnection = {
   __typename?: 'NumberKeyValueCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<NumberKeyValueCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NumberKeyValueCountableEdge = {
   __typename?: 'NumberKeyValueCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<NumberKeyValue>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type NumberKeyValue = Node & {
   __typename?: 'NumberKeyValue';
  /** The ID of the object. */
  id: Scalars['ID'];
  key: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
  systems?: Maybe<System>;
};

export type ReactionSystemCountableConnection = {
   __typename?: 'ReactionSystemCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ReactionSystemCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ReactionSystemCountableEdge = {
   __typename?: 'ReactionSystemCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<ReactionSystem>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ReactionSystem = Node & {
   __typename?: 'ReactionSystem';
  name?: Maybe<Scalars['String']>;
  energyCorrection?: Maybe<Scalars['Float']>;
  aseId: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  reactions?: Maybe<Reaction>;
  systems?: Maybe<System>;
};

export type Reaction = Node & {
   __typename?: 'Reaction';
  /** The ID of the object. */
  id: Scalars['ID'];
  chemicalComposition?: Maybe<Scalars['String']>;
  surfaceComposition?: Maybe<Scalars['String']>;
  facet?: Maybe<Scalars['String']>;
  sites?: Maybe<Scalars['JSONString']>;
  coverages?: Maybe<Scalars['JSONString']>;
  reactants?: Maybe<Scalars['JSONString']>;
  products?: Maybe<Scalars['JSONString']>;
  reactionEnergy?: Maybe<Scalars['Float']>;
  activationEnergy?: Maybe<Scalars['Float']>;
  dftCode?: Maybe<Scalars['String']>;
  dftFunctional?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  pubId?: Maybe<Scalars['String']>;
  textsearch?: Maybe<Scalars['JSONString']>;
  Equation?: Maybe<Scalars['String']>;
  reactionSystems?: Maybe<Array<Maybe<ReactionSystem>>>;
  systems?: Maybe<Array<Maybe<System>>>;
  publication?: Maybe<Publication>;
};

export type Publication = Node & {
   __typename?: 'Publication';
  /** The ID of the object. */
  id: Scalars['ID'];
  pubId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  authors?: Maybe<Scalars['JSONString']>;
  journal?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['String']>;
  doi?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSONString']>;
  pubtextsearch?: Maybe<Scalars['JSONString']>;
  stime?: Maybe<Scalars['Float']>;
  Stime?: Maybe<Scalars['String']>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  systems?: Maybe<Array<Maybe<System>>>;
};

export type Log = Node & {
   __typename?: 'Log';
  aseId: Scalars['String'];
  logfile?: Maybe<Scalars['String']>;
  Logtext?: Maybe<Scalars['String']>;
  systems?: Maybe<System>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ReactionCountableConnection = {
   __typename?: 'ReactionCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ReactionCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ReactionCountableEdge = {
   __typename?: 'ReactionCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<Reaction>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PublicationCountableConnection = {
   __typename?: 'PublicationCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PublicationCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PublicationCountableEdge = {
   __typename?: 'PublicationCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<Publication>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LogCountableConnection = {
   __typename?: 'LogCountableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<LogCountableEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LogCountableEdge = {
   __typename?: 'LogCountableEdge';
  /** The item at the end of the edge */
  node?: Maybe<Log>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { reactionSystems?: Maybe<(
    { __typename?: 'ReactionSystemCountableConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ReactionSystemCountableEdge' }
      & { node?: Maybe<(
        { __typename?: 'ReactionSystem' }
        & Pick<ReactionSystem, 'id'>
        & { reactions?: Maybe<(
          { __typename?: 'Reaction' }
          & Pick<Reaction, 'chemicalComposition' | 'id'>
        )> }
      )> }
    )>> }
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { systems?: Maybe<(
    { __typename?: 'SystemCountableConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'SystemCountableEdge' }
      & { node?: Maybe<(
        { __typename?: 'System' }
        & Pick<System, 'username' | 'freeEnergy' | 'dipole' | 'charge' | 'data'>
      )> }
    )>> }
  )> }
);

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = (
  { __typename?: 'Query' }
  & { publications?: Maybe<(
    { __typename?: 'PublicationCountableConnection' }
    & Pick<PublicationCountableConnection, 'totalCount'>
    & { edges: Array<Maybe<(
      { __typename?: 'PublicationCountableEdge' }
      & { node?: Maybe<(
        { __typename?: 'Publication' }
        & Pick<Publication, 'id' | 'authors'>
      )> }
    )>> }
  )> }
);

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = (
  { __typename?: 'Query' }
  & { reactions?: Maybe<(
    { __typename?: 'ReactionCountableConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ReactionCountableEdge' }
      & { node?: Maybe<(
        { __typename?: 'Reaction' }
        & Pick<Reaction, 'id' | 'Equation' | 'chemicalComposition' | 'activationEnergy'>
      )> }
    )>> }
  )> }
);

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = (
  { __typename?: 'Query' }
  & { reactions?: Maybe<(
    { __typename?: 'ReactionCountableConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ReactionCountableEdge' }
      & { node?: Maybe<(
        { __typename?: 'Reaction' }
        & Pick<Reaction, 'id' | 'Equation' | 'chemicalComposition' | 'reactionEnergy'>
      )> }
    )>> }
  )> }
);

