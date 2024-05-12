'use client'

import { Provider } from 'react-redux';
import store from './store';

export default function Template({ children }: { children: React.ReactNode }) {
  return <main>
    <Provider store={store}>
      {children}
    </Provider>
    </main>
}
