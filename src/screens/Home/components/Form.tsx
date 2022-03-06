import styles from "../style.module.css";
import GridBox from "../../../components/GridBox";
import { Button, Typography } from "@material-ui/core";
import { Building } from "../../../@types/user";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { addBuilding } from "../../../utils/formValidation";
import { useMemo } from "react";
import { countriesList } from "../../../assets/countriesList";
import FormikSelect from "../../../components/FormikSelect";
import FormikInput from "../../../components/FormikInput";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { addItemAction, editItemAction } from "../../../redux/List/actions";
import { ThunkDispatch } from "redux-thunk";
import { ActionsType } from "../../../redux/List/constants";
import CircularProgress from "@mui/material/CircularProgress";

interface IProps {
  building?: Building;
  userId: string;
  isEditing: boolean;
  loading: boolean;
}

function BuildingForm(props: IProps) {
  const {
    listReducer: { isLoading },
  } = useSelector((state: AppState): AppState => state);
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionsType>>();

  const handleSubmit = async (
    values: FormikValues,
    helpers: FormikHelpers<any>
  ) => {
    const body = {
      userId: props.userId,
      building: {
        name: values.name,
        id:
          props.isEditing && props.building?.id
            ? props.building?.id
            : `${Math.random() * 1000}`,
        position:
          countriesList.find((country) => country.id === values.location.id)
            ?.position || [],
      },
    };
    await dispatch(
      props.isEditing ? editItemAction(body) : addItemAction(body)
    );
    helpers.resetForm();
  };

  const country = useMemo(() => {
    if (!props.isEditing) return null;
    const found = countriesList.find(
      (item) =>
        item.position[0] === props.building?.position[0] &&
        item.position[1] === props.building?.position[1]
    );
    return (
      found && {
        label: found.name,
        id: found.id,
      }
    );
  }, [props.building?.position, props.isEditing]);

  const options = useMemo(
    () =>
      countriesList.map((item) => ({
        label: item.name,
        id: item.id,
      })),
    []
  );

  return props.loading ? (
    <CircularProgress color="inherit" size={30} className={styles.spinner} />
  ) : (
    <GridBox
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      direction={"column"}
      className={styles.form}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        className={styles.contentTitle}
      >
        Building
      </Typography>

      <Formik
        initialValues={{
          name: (props.isEditing && props.building?.name) || "",
          location: country,
        }}
        onSubmit={handleSubmit}
        validationSchema={addBuilding}
        enableReinitialize={true}
      >
        {() => (
          <Form className={styles.formBody}>
            <FormikInput name={"name"} type={"text"} label={"Name"} />
            <FormikSelect
              options={options}
              label={"Location"}
              loading={false}
              id={"location"}
              name={"location"}
            />
            <Button
              disabled={isLoading}
              size={"large"}
              className={styles.btn}
              type={"submit"}
              variant={"contained"}
              color={"primary"}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </GridBox>
  );
}

export default BuildingForm;
