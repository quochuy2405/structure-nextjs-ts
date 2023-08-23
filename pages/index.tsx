import { Home } from '@/components/templates'
import { SecondLayout } from '@/layouts/MainLayout/MainLayout'
import type { NextPage } from '@/types/next'
const HomePage: NextPage = () => {
  return <Home />
}
HomePage.getLayout = function getLayout(page) {
  return <SecondLayout>{page}</SecondLayout>
}
export default HomePage
