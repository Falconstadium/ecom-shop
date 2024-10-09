import { createFileRoute } from '@tanstack/react-router';
import Navbar from '../components/Navbar';
import Collection from '../components/Collection';

export const Route = createFileRoute('/collection')({
  component: () => {
    return (
      <>
        <Navbar />
        <Collection />
      </>
    );
  },
});
