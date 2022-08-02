import type { NextPageWithLayout } from '../pages/_app'

import ProfileLayout from '@components/layouts/ProfileLayout'
import Layout from '@components/layouts/Layout';

const Profile: NextPageWithLayout = () => {
  return (
    <h2> TEST </h2>
  );
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <ProfileLayout>
        {page}
      </ProfileLayout>
    </Layout>

  )
}

export default Profile
