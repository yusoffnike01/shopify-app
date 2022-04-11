/** @format */

import React, { useState } from 'react';
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import ProductList from '../components/ResourceList';

const Index = () => {
  const [modal, setModal] = useState({ open: false });

  const emptystate = !store.get('ids');
  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((resource) => resource.id);
    setModal({ open: false });
    store.set('ids', idsFromResources);
    console.log('this is product ids', store.get('ids'));
  };
  return (
    <Page>
      <ResourcePicker
        resourceType='Product'
        showVariants={false}
        open={modal.open}
        onCancel={() => setModal({ open: false })}
        onSelection={(resources) => handleSelection(resources)}
      />
      {emptystate ? (
        <Layout>
          <EmptyState
            heading='Manage your inventory transfers'
            action={{
              content: 'Select Product',
              onAction: () => setModal({ open: true }),
            }}
            image='https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png'
          >
            <p>Select Products</p>
          </EmptyState>
        </Layout>
      ) : (
        <ProductList />
      )}
    </Page>
  );
};

export default Index;
