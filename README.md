# Outjector

A PoC for using Injector.js as a standalone dependency in apps outside of the CMS.

### Getting Started

1. Run `yarn` in all three directories (injector, primary, secondary)
2. Run `yarn dev` in the `injector` directory (this will produce a dist build of Injector.js)
3. Run `yarn watch` in each of the `primary` and `secondary` directories (this will build both apps whenever they're changed)
4. Serve the root directory somehow (simplest approach: `php -S 127.0.0.1:7777`)
5. Visit the served site in your browser and observe magic

### Core concepts

The intention here is to allow a front-end app to be extended by / utilise code that can't be baked into its dist build.
This could be caused by a variety of factors, but the use-case that sparked this PoC is the SilverStripe MFA module,
which will have an environment-agnostic app (can be rendered in the CMS or front-end) that needs to make use of UI
components defined in 'plugin' modules (which handle specific authentication methods).

### Current state

This copy of Injector.js includes all four providers (Components, Reducers, Forms and GraphQL Queries), but so far only
the Component provider has undergone testing. The following features are known to either be working or broken.

#### Component Provider

- [x] Simple component registration / consumption (via `Injector.component.register()` and `Injector.component.get()`)
- [x] Simple component transforms (used to wrap existing components in HOCs via `Injector.transform()`)
- [ ] Dependency injection in component definitions via `inject()()` HOC (used to provide extra components as props)
