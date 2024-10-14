export const Testimony = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col items-start gap-[150px] ml-28">
      <div className="text-customBlack font-helveticaNeue text-[70px] leading-[90%]">
        témoignage
      </div>
      <div className="text-customRed text-[70px] font-helveticaNeue leading-[90%] w-[1150px]">
        {content}
      </div>
      <div>Voir sur linkedin</div>
    </div>
  );
};
