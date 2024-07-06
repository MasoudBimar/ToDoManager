import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { listReducer } from './state/list.reducer';
import { taskReducer } from './state/task.reducer';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideEffects } from '@ngrx/effects';
import { TasksEffects } from './state/task.effect';
import { ListsEffects } from './state/list.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({ taskState: taskReducer, listState: listReducer }),
    provideHttpClient(),
    provideNativeDateAdapter(),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
    provideEffects(TasksEffects, ListsEffects)
]
};
