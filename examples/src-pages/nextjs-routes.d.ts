// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.'
// Run `yarn nextjs-routes` to regenerate this file.

type Route =
  | { pathname: "/api/hello"; query?: Query | undefined }
  | { pathname: "/bars/[bar]"; query: Query<{ bar: string }> }
  | { pathname: "/foos/[foo]"; query: Query<{ foo: string }> }
  | { pathname: "/"; query?: Query | undefined };

type Pathname = Route["pathname"];

type Query<Params = {}> = Params & {
  [key: string]: string;
};

type QueryForPathname = {
  [K in Route as K["pathname"]]: K["query"];
};

declare module "next/link" {
  import type { LinkProps as NextLinkProps } from "next/dist/client/link";
  import type { PropsWithChildren, MouseEventHandler } from "react";

  export interface LinkProps extends Omit<NextLinkProps, "href"> {
    href: Route;
  }

  declare function Link(
    props: PropsWithChildren<LinkProps>
  ): DetailedReactHTMLElement<
    {
      onMouseEnter?: MouseEventHandler<Element> | undefined;
      onClick: MouseEventHandler;
      href?: string | undefined;
      ref?: any;
    },
    HTMLElement
  >;

  export default Link;
}

declare module "next/router" {
  import type { NextRouter as Router } from "next/dist/client/router";
  export { RouterEvent } from "next/dist/client/router";

  type TransitionOptions = Parameters<Router["push"]>[2];

  export interface NextRouter<P extends Pathname = Pathname>
    extends Omit<Router, "push" | "replace"> {
    pathname: P;
    route: P;
    query: QueryForPathname[P];
    push(
      url: Route,
      as?: string,
      options?: TransitionOptions
    ): Promise<boolean>;
    replace(
      url: Route,
      as?: string,
      options?: TransitionOptions
    ): Promise<boolean>;
  }

  export function useRouter<P extends Pathname>(): NextRouter<P>;
}