import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Happy Birthday my love" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300 text-left">
        I wish I could have been there with you but I'm hoping to make up for 
        it with presenting your gift in a slightly different way. Solving this 
        Wordle will provide you with your first clue.
      </p>
      <br />

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="I" isCompleted={true} />
        <Cell value="F" isCompleted={true} />
        <Cell value="❤️" isCompleted={true} />
        <Cell value="U" isCompleted={true} />
        <Cell value="!" isCompleted={true} />
      </div>
      {/*
      <p className="text-sm text-gray-500 dark:text-gray-300 text-left">
        You know how to play but in the spirit of diligence...
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>
      
      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell value="Y" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="G" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>
      */}
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-left">
        I believe in you, you've got this and I love you more than anything in the world{"😚"}
      </p>
    </BaseModal>
  )
}
