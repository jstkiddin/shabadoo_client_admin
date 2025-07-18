import CardBackground from '@shared/components/CardBackground'
import { BaseWrapper } from '@shared/wrappers/BaseWrapper'
import TeachersListPage from '../features/teachers/pages/TeachersListPage'

function Teachers() {
  return (
    <BaseWrapper>
      <CardBackground>
        <TeachersListPage />
      </CardBackground>
    </BaseWrapper>
  )
}

export default Teachers
