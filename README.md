# NgRoutingPlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## What it's about

It demonstrates a three staged loading of components and modules:

```
            O
            |
            V
(1)     AppModule
            :
(2)         :  AuthGuard
            :
            V
(3)    ShellModule
            |
(4)         |  InitGuard
            |
            V
(5)  DashboardModule
```

1. We start with main entry module `AppModule` (and its `AppComponent`)
2. The `AuthGuard` will asynchronously check the current authentication state (before **lazily** routing to `ShellModule`)
3. When `AuthGuard.canLoad()` succeeds angular **lazily** loads `ShellModule` (and its `ShellComponent`, and already bundled `DashboardModule`)
4. The `InitGuard` will asynchronously initialize application state (before activating the `ShellComponent` and its child routes)
5. When `InitGuard.canActivate()` succeeds the child route `/dashboard` will be activated. This will initialize `DashboardComponent` and attach it to the DOM.
