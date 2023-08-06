import React from 'react';

function Portal({
  domHandler,
  location,
  time,
  other,
  message,
}: {
  domHandler: React.Dispatch<React.SetStateAction<boolean>>;
  location: string;
  time: string;
  other: string;
  message: string;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => {
        domHandler(false);
      }}
    >
      <div
        className=" p-4 h-[320px] w-[780px] bg-white rounded-[20px] overflow-scroll"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="text-blue-400 text-center text-lg mb-4">예보 상세 정보</h1>
        <div className="flex">
          <img
            src={encodeURI(
              `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=15&size=200x200&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`
            )}
            width={200}
            height={200}
            className="rounded-[20px] mr-2 self-start"
          />
          <div>
            <p>지역:{location} </p>
            <p>예고시간: {time}</p>
            <p>기사 요약:{message}</p>
            <p>
              <a href={other}>[기사 바로가기]</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
