import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Tetris from 'react-tetris';

function NoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsMobile(width < height);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.code === 'Space') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="main-container-pages flex flex-col text-center">
      <h1 className="font-bold">404</h1>
      <p className="my-2">
        {t('dontFindPageFistRow')}
        <strong>
          <Link to="/" relative="path">
            {t('homeHereLink')}
          </Link>
        </strong>
        <span className={`${isMobile ? 'hidden' : ''}`}>
          {t('dontFindPageSecondRow')}
        </span>
      </p>
      <div
        className={`flex flex-col md:flex-row justify-center gap-8 ${isMobile ? 'hidden' : ''}`}
      >
        <Tetris
          keyboardControls={{
            down: 'MOVE_DOWN',
            left: 'MOVE_LEFT',
            right: 'MOVE_RIGHT',
            space: 'HARD_DROP',
            z: 'FLIP_COUNTERCLOCKWISE',
            x: 'FLIP_CLOCKWISE',
            up: 'FLIP_CLOCKWISE',
            p: 'TOGGLE_PAUSE',
            c: 'HOLD',
            shift: 'HOLD',
            h: 'HARD_DROP',
          }}
        >
          {({
            Gameboard,
            PieceQueue,
            points,
            linesCleared,
            state,
            controller,
          }) => (
            <div className="mt-3">
              <div className="flex flex-col md:flex-row gap-5 justify-center">
                <div className="block mx-auto">
                  <Gameboard />
                </div>
                <div className="hidden md:block">
                  <PieceQueue />
                </div>
                <div className="hidden md:block">
                  <p>
                    <strong>Points:</strong> {points}
                  </p>
                  <p>
                    <strong>Lines Cleared:</strong> {linesCleared}
                  </p>
                  {state === 'LOST' && (
                    <div>
                      <h2 className="text-red-500">Game Over</h2>
                    </div>
                  )}
                  <button className="font-bold" onClick={controller.restart}>
                    New game
                  </button>
                  <div className="flex flex-col gap-8 max-w-[230px] mt-3">
                    <ul>
                      <li className='mb-2'>
                        <strong>up button key:</strong> rotate block
                      </li>
                      <li className='mb-2'>
                        <strong>left and right keys:</strong> move block to left or
                        right
                      </li>
                      <li className='mb-2'>
                        <strong>space key:</strong> hard drop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`mt-3 flex flex-col md:hidden gap-5 ${isMobile ? '' : 'hidden'}`}
              >
                <div className="flex flex-col">
                  <p>
                    <strong>Points:</strong> {points}
                  </p>
                  <p>
                    <strong>Lines Cleared:</strong> {linesCleared}
                  </p>
                </div>
                <div className="flex flex-col">
                  {state === 'LOST' && (
                    <div>
                      <h2 className="text-red-500">Game Over</h2>
                    </div>
                  )}
                  <button className="font-bold" onClick={controller.restart}>
                    New game
                  </button>
                </div>
              </div>
            </div>
          )}
        </Tetris>
      </div>
    </div>
  );
}

export default NoPage;
