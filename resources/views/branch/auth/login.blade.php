<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>System - Delivery Sansar</title>
    <meta content="Delivery service in Itahari" name="description" />
    <meta content="Sandeep Shrestha" name="author" />
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">


    <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/metismenu.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/icons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/style.css')}}" rel="stylesheet" type="text/css">

</head>

<body>

<!-- Begin page -->
<div class="accountbg"></div>
<div class="wrapper-page">
    <div class="card card-pages shadow-none">

        <div class="card-body">
            <div class="text-center m-t-0 m-b-15">
{{--                <a href="#" class="logo logo-admin"><img src="{{asset('assets/images/logo-dark.png')}}" alt="" height="24"></a>--}}
            </div>
            @include('flashMessages')
            <h5 class="font-18 text-center">Sign in to continue to Delivery Sansar</h5>

            <form class="form-horizontal m-t-30" action="{{route('branch.login')}}" method="post">
                @csrf
                <div class="form-group">
                    <div class="col-12">
                        <label>Email</label>
                        <input class="form-control" name="email" type="email" value="{{old('email')}}" required="" placeholder="Email">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-12">
                        <label>Password</label>
                        <input class="form-control" name="password" type="password" required="" placeholder="Password">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-12">
                        <div class="checkbox checkbox-primary">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1"> Remember me</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group text-center m-t-20">
                    <div class="col-12">
                        <button class="btn btn-primary btn-block btn-lg waves-effect waves-light" type="submit">Log In</button>
                    </div>
                </div>

                <div class="form-group row m-t-30 m-b-0">
                    <div class="col-sm-7">
                        <a href="#" class="text-muted"><i class="fa fa-lock m-r-5"></i> Forgot your password?</a>
                    </div>
                </div>
            </form>
        </div>

    </div>
</div>
<!-- END wrapper -->

<!-- jQuery  -->
<script src="{{asset('assets/js/jquery.min.js')}}"></script>
<script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('assets/js/metismenu.min.js')}}"></script>
<script src="{{asset('assets/js/jquery.slimscroll.js')}}"></script>
<script src="{{asset('assets/js/waves.min.js')}}"></script>

<!-- App js -->
<script src="{{asset('assets/js/app.js')}}"></script>

</body>

</html>
