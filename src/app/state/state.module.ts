import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { listReducer } from './list.reducer';
import { taskReducer } from './task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './task.effect';
import { ListsEffects } from './list.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ taskState: taskReducer, listState: listReducer }),
    EffectsModule.forRoot(TasksEffects, ListsEffects),
    StoreDevtoolsModule.instrument()
  ],
  declarations: []
})
export class StateModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<StateModule> {
    return {
      ngModule: StateModule
    };
  }
}
