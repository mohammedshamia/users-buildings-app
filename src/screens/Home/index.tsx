import AutoCompleteSelect from "../../components/Select";
import Layout from "../../components/Layout";
import GridBox from "../../components/GridBox";
import ContentBox from "./components/ContentBox";
import { useMemo, useState } from "react";
import { Option } from "../../components/Select/@types";
import { User } from "../../@types/user";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../redux/store";
import { ActionsType } from "../../redux/List/constants";
import { getItems } from "../../redux/List/actions";

function Home() {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionsType>>();

  const {
    listReducer: { list, isLoading },
  } = useSelector((state: AppState): AppState => state);

  const [selectedUser, setSelectedUser] = useState<Option>(null);

  const options: Option[] = useMemo(
    () =>
      list.map((user) => ({
        id: user.id,
        label: user.name,
      })),
    [list]
  );

  const user: User | null = useMemo(
    () => list.find((user) => user.id === selectedUser?.id) || null,
    [list, selectedUser?.id]
  );

  const handleSelectClick = () => {
    if (!list.length) dispatch(getItems());
  };

  const handleOnChange = (value: Option) => {
    setSelectedUser(value);
  };
  return (
    <Layout>
      <GridBox>
        <AutoCompleteSelect
          autoFocus
          label={"Select User"}
          id={"users"}
          loading={isLoading}
          onChange={handleOnChange}
          options={options}
          value={selectedUser}
          width={400}
          onClick={handleSelectClick}
        />
        {user && <ContentBox user={user} />}
      </GridBox>
    </Layout>
  );
}

export default Home;
