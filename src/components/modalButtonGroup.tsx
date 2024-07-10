import { primaryColor, primaryColorHover } from "@/types/colors";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function ModalButtonGroup({
  leftButtonTitle,
  rightButtonTitle,
  rightButtonLoadingText,
  leftButtonDestiny,
  isLastStep,
  onRightButtonFunction,
}: {
  leftButtonTitle: string;
  rightButtonTitle: string;
  rightButtonLoadingText: string;
  leftButtonDestiny?: string;
  isLastStep?: boolean;
  onRightButtonFunction?: () => void;
}) {
  const [isRightButtonLoading, setIsRightButtonLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [hasClickedLeftButton, setHasClickedLeftButton] = useState(false);

  function onLeftButtonClick() {
    setHasClickedLeftButton(true);
    isLastStep
      ? setIsRightButtonLoading(false)
      : setTimeout(() => {
          setIsRightButtonLoading(false);
        }, 3000);
  }

  function onRightButtonClick() {
    setCompleted(true);
    if (onRightButtonFunction) {
      onRightButtonFunction();
    }
  }

  return (
    <Flex justify="center" gap="12px">
      {leftButtonDestiny ? (
        <Link target="_blank" href={leftButtonDestiny}>
          <Button
            backgroundColor={primaryColor}
            onClick={onLeftButtonClick}
            width="200px"
            color="#000"
            _hover={{ backgroundColor: primaryColorHover }}
          >
            {leftButtonTitle}
          </Button>
        </Link>
      ) : (
        <Button
          isDisabled={!completed}
          backgroundColor={primaryColor}
          onClick={onLeftButtonClick}
          width="200px"
          color="#000"
          _hover={{ backgroundColor: primaryColorHover }}
        >
          {leftButtonTitle}
        </Button>
      )}
      <Button
        isLoading={isRightButtonLoading}
        loadingText={rightButtonLoadingText}
        isDisabled={!hasClickedLeftButton}
        colorScheme="green"
        width="200px"
        onClick={onRightButtonClick}
      >
        {rightButtonTitle}
      </Button>
    </Flex>
  );
}
