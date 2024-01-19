import { View } from "app/design/view";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TextLink } from "app/design/typography";
import { TextInput } from "app/design/input";
import { SolitoImage } from "solito/image";
import * as Icon from "react-native-feather";

const Navbar = () => {
  return (
    <>
      <MaxWidthWrapper>
        <View className="flex-row items-center justify-center h-10 mt-6">
          <TextLink href={"/"} className=" mr-2 flex-col items-end">
            <SolitoImage
              src={"https://www.lifepharmacy.com/images/life.svg"}
              height={40}
              width={40}
              alt="Logo"
              style={{
                aspectRatio: 1,
              }}
            />
          </TextLink>
          <View className="relative flex-1 px-4  bg-slate-50/50 rounded-xl h-full justify-center border-slate-100 border">
            <Icon.Search
              color="gray"
              width={17}
              height={17}
              style={{
                position: "absolute",
                left: 10,
              }}
            />
            <TextInput
              className="h-full w-full text-sm pl-5"
              //   value={searchTerm}
              //   onChangeText={(text) => setSearchTerm(text)}
              placeholder="What are you looking for?"
            />
          </View>
        </View>
      </MaxWidthWrapper>
      <View className="border-b pt-2 shadow border-slate-50" />
    </>
  );
};

export default Navbar;
