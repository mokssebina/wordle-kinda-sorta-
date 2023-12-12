import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  RefreshIcon
} from '@heroicons/react/outline'
import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {

  const reloadGame = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex">
          <InformationCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>
        {/*<p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>*/}
        <div className='w-1/2 md:w-44 mx-auto'>
          <img alt='logo' className='h-auto' src='./wordle-logo.png' />
        </div>
        <div className="right-icons">
          {/*
          <ChartBarIcon
            className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
          */}
          <RefreshIcon
            className="ml-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={reloadGame}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
