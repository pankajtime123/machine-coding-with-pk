/* eslint-disable react/display-name */

import React from 'react';

const withCenteredLayout = (Component:any) => {
  // The returned component now accepts props
  return (props:any) => (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Component {...props} />
    </main>
  );
}

export default withCenteredLayout;