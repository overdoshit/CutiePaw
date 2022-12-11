<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OUTPUT</title>
</head>

<body>

    <?php
    $owner = $_POST["owner"];
    $address = $_POST["address"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $animal = $_POST["animal"];
    $pet = $_POST["pet"];
    $age = $_POST["age"];
    $sex = $_POST["sex"];
    $layanan =  $_POST["layanan"];
    $service = $_POST["service"];
    $delivery = $_POST["delivery"];
    $datetime_check_in = $_POST["datetime-check-in"];
    $datetime_check_out = $_POST["datetime-check-out"];

    $previous = "javascript:history.go(-1)";
    if (isset($_SERVER['HTTP_REFERER'])) {
        $previous = $_SERVER['HTTP_REFERER'];
    }
    ?>

    <table border="1" cellpadding="8" class="table">
        <tr>
            <th colspan="2">PET OWNER DATA</th>
        </tr>
        <tr>
            <td>Nama Owner</td>
            <td><?php echo $owner; ?></td>
        </tr>
        <tr>
            <td>Address</td>
            <td><?php echo $address; ?></td>
        </tr>
        <tr>
            <td>No. Telphone</td>
            <td><?php echo $phone; ?></td>
        </tr>
        <tr>
            <td>E-mail <Address></Address>
            </td>
            <td><?php echo $email; ?></td>
        </tr>

        <tr>
            <th colspan="2">PET DATA</th>
        </tr>
        <tr>
            <td>Jenis Hewan</td>
            <td><?php echo $animal; ?></td>
        </tr>
        <tr>
            <td>Nama Pet</td>
            <td><?php echo $pet; ?></td>
        </tr>
        <tr>
            <td>Umur</td>
            <td><?php echo $age; ?></td>
        </tr>
        <tr>
            <td>Sex</td>
            <td><?php echo $sex; ?></td>
        </tr>

        <tr>
            <th colspan="2">KETERANGAN</th>
        </tr>
        <tr>
            <td>Jenis Layanan</td>
            <td><?php echo $layanan; ?></td>
        </tr>
        <tr>
            <td>Service</td>
            <td><?php echo $service; ?></td>
        </tr>
        <tr>
            <td>Delivery</td>
            <td><?php echo $delivery; ?></td>
        </tr>
        <tr>
            <td>Datetime Check IN</td>
            <td><?php echo $datetime_check_in; ?></td>
        </tr>
        <tr>
            <td>Datetime Check OUT</td>
            <td><?php echo $datetime_check_out; ?></td>
        </tr>

    </table>
    <br></br>

    <button><a href="<?= $previous ?>">Back</a></button>
</body>

</html>